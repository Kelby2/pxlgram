class Api::CommentsController < ApplicationController

  def index

    if params[:photo_id]
      photo = Photo.find(params[:photo_id])
      @comments = photo.comments
      .includes(:user)
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
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    #find the specific comment through current_users comments?
    @comment = Comment.find_by(id: params[:id])
    @photo = Photo.find(@comment.photo_id)

    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :photo_id)
  end

end
