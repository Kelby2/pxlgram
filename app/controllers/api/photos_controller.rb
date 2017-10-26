class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end

  end

  def show
    @photo = Photo.find(params[:id])
  end

  private

  def photo_params
    params.require(:photo).permit(:author_id, :caption)
  end

end
