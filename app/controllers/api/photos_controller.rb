class Api::PhotosController < ApplicationController

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      @photos = user.photos
    else
      @photos = Photo.all
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = current_user.photos.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end

  end

  def update
    @photo = current_user.photos.find_by(id: params[:id])

    if @photo
      @photo.update(photo_params)
      render :show
    else
      render json: ['You are not authorized to edit this'], status: 401
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
    params.require(:photo).permit(:author_id, :caption, :image_url, :author)
  end

end
