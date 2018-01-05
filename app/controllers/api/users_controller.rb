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

    render :show

  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      errors = first_message_for_each_error(@user.errors)
      render json: errors, status: 422
    end

  end

  def update
    @user = current_user

    if @user.update(user_params)
      render :show
    else
      errors = first_message_for_each_error(@user.errors)
      render json: errors, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:fullname, :email, :username, :password, :bio, :avatar)
  end

end
