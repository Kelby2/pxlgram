class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(username: params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
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
