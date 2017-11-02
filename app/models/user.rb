class User < ApplicationRecord

  validates :fullname, :password_digest, presence: true
  validates :email, :username, :session_token, presence: true,
   uniqueness: true
  validates :bio, length: { maximum: 150 }
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :avatar, default_url: "default-user-avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  before_validation :ensure_session_token
  attr_reader :password

  has_many :photos,
    foreign_key: :author_id,
    class_name: :Photo

  has_many :likes,
    foreign_key: :user_id,
    class_name: :Like

  def self.find_by_credentials(username, password)
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
