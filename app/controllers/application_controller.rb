class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :first_message_for_each_error

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def logout!
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def first_message_for_each_error(errors)
    messages = []
    errors.keys.each do |error|
      messages.push(errors.full_messages_for(error).first)
    end

    messages
  end

end
