class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],
                                      params[:user][:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: ["Invalid username and password combination"], status: 401
    end

  end

  def destroy
    if !current_user
      render json: ["No current user!"], status: 404
    else
      logout!
    end
  end


end
