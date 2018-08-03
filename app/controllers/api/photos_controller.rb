class Api::PhotosController < ApplicationController

  def index
    if params[:user_id]
      user = User.find_by(username: params[:user_id])
      @photos = user.photos
      .includes(:author, :likers, :commenters)
      .order(created_at: :desc)
    elsif params[:explore]
      @photos = Photo
      .includes(:author, :likers, :commenters)
      .order(created_at: :desc)
      .paginate(:page => params[:page], per_page: 12)
    else
      followings = current_user.followings.map(&:id)
      @photos = Photo
      .where(author_id: followings)
      .includes(:author, :likes, :comments, :likers, :commenters)
      .order(created_at: :desc)
      .paginate(:page => params[:page], per_page: 5)
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @user = current_user
    if photo_params[:image] == "null"
      @photo = @user.photos.create(caption: photo_params[:caption], image: nil)
    else
      @photo = @user.photos.create(photo_params)
    end

    if @photo.save
      render :show
    else
      errors = first_message_for_each_error(@photo.errors)
      render json: errors, status: 422
    end
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo
      @photo.destroy
    else
      render json: ['You cannot delete this photo'],
      status: 401
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:author_id, :caption, :image)
  end

end
