class User < ApplicationRecord

  validates :username, :fullname, :email, :session_token, presence: true,
              uniquness: true
  validates password_digest, presence: true
  validates :password, length: { minimum: 6 }

  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_username(username, password)
    @user = User.find_by(username: username)
    @user && @user.is_password?(password) ? @user : nil
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    self.password_digest
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
