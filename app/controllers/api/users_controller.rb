class Api::UsersController < ApplicationController

  def search
    if params[:new_user]
      # pull users that the current user is not already following
      # for when the users they are already following have no photos
      @users = User
      .where.not(id: [*current_user.followings.pluck(:id), current_user.id])
      .sample(10)
    else
      userQuery = params[:query]
      @users = User.where("username LIKE ? OR LOWER(fullname) LIKE ?",
      "#{userQuery}%", "#{userQuery}%")
    end

    render :search
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

    if (current_user.username == "friend" && user_params[:username] != "friend")
      render json: ["Please do not change the demo account's username, Thank you!"], status: 401
    elsif @user.update(user_params)
      render :show
    else
      errors = first_message_for_each_error(@user.errors)
      render json: errors, status: 422
    end
  end

  def follow
    @user = current_user
    followee = User.find_by(username: params[:username])
    @following = @user.followeeships.create(followee_id: followee.id)

    if @following.save
      render json: {follower: @user.username, followee: followee.username}, status: 200
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  def unfollow
    @user = current_user
    followee = User.find_by(username: params[:username])
    @following = @user.followeeships.find_by(followee_id: followee.id)

    if @following.destroy
      render json: {follower: @user.username, followee: followee.username}, status: 200
    else
      render json: @following.errors.full_messages, status: 401
    end

  end

  private

  def user_params
    params.require(:user)
      .permit(:fullname, :email, :username, :password, :bio, :avatar)
      #reject prevents updating when avatar is unchanged (comes in as null)
      #.reject { |key, value| value == "null" }
  end

end
