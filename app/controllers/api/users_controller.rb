class Api::UsersController < ApplicationController

  def index
    userQuery = params[:query]
    if userQuery
      @users = User.where("username LIKE ? OR fullname LIKE ?",
                            "#{userQuery}%", "#{userQuery}%")
    else
      @users = User.all
    end

  end

  def show
    @user = User.find_by(username: params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    elsif @user.username.empty?
      errors = @user.errors.full_messages
      errors.delete("Username can only use letters, numbers, underscores and periods.")
      render json: errors, status: 422
    else
      errors = @user.errors.full_messages
      errors.delete("Username can't be empty")
      render json: errors, status: 422
    end

  end

  def update
    @user = User.find(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @users.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:fullname, :email, :username, :password)
  end

end
