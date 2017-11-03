class Api::CommentsController < ApplicationController

  def create
    @user = current_user
    @photo = Photo.find(params[:photo_id])

    @comment = @user.comments.create(photo_id: @photo.id)

    if @comment.save
      render 'api/photos/show'
    else
      render json: @comments.errors.full_messages, status: 422
    end

  end

  def destroy
    #find the specific like through current_users likes?
    @comment = current_user.comments.find_by(photo_id: params[:id])
    @photo = Photo.find(@comment.photo_id)

    @comment.destroy!
    render 'api/photos/show'
  end

  def like_params
    params.require(:comment).permit(:body)
  end

end
