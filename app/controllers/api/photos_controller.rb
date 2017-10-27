class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
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
    @photo = current_user.photos.find(params[:id])

    if @photo && @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end

  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = current_user.photos.find(params[:id])

    if @photo && @photo.destroy
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end


  end

  private

  def photo_params
    params.require(:photo).permit(:author_id, :caption)
  end

end
