class Api::LikesController < ApplicationController

  def create
    @user = current_user
    @photo = Photo.find(params[:photo_id])

    @like = @user.likes.create(photo_id: @photo.id)

    if @like.save
      render 'api/photos/like'
    else
      render json: @like.errors.full_messages, status: 422
    end

  end

  def destroy
    #find the specific like through current_users likes?
    @like = current_user.likes.find_by(photo_id: params[:id])
    @photo = Photo.find(@like.photo_id)

    @like.destroy!
    render 'api/photos/like'
  end

  def like_params
    params.require(:like).permit(:photo_id)
  end

end
