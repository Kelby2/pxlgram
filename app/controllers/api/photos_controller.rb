class Api::PhotosController < ApplicationController

  def index
    if params[:user_id]
      user = User.find_by(username: params[:user_id])
      @photos = user.photos
    else
      @photos = Photo
      .includes(:author, :likes, :comments, :likers, :commenters)
      .order(created_at: :desc)
      .paginate(:page => params[:page], per_page: 5)
    end
  end

  def grid
    @photos = Photo
    .order(created_at: :desc)
    .paginate(:page => params[:page], per_page: 12)

    render 'api/photos/index'
    # .paginate(:page => params[:page], per_page: 12)
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @user = current_user
    @photo = @user.photos.create(photo_params)

    if @photo.save
      render 'api/users/show'
    else
      render json: @photo.errors.full_messages, status: 422
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
