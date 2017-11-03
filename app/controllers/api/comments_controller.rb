class Api::CommentsController < ApplicationController

  def index
    if params[:photo_id]
      photo = Photo.find(params[:photo_id])
      @comments = photo.comments
    else
      @comments = Comment.all
    end

  end

  def create
    @user = current_user
    @photo = Photo.find(params[:photo_id])

    @comment = @user.comments.create(photo_id: @photo.id, body: params[:body])

    if @comment.save
      render 'api/comments/show'
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

  def comment_params
    params.require(:comment).permit(:body, :photo_id)
  end

end
