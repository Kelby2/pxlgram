# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  fullname            :string           not null
#  email               :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  bio                 :text
#

class User < ApplicationRecord

  auto_strip_attributes :email, :fullname, :username,
    nullify: false, squish: true

  validates :email, :fullname, :username, :password_digest, :session_token, presence: true
  validates :email, :username, :session_token, uniqueness: true
  validates :username, format: { with: /\A[a-zA-Z0-9_-]+\Z/,
    message: "can only use letters, numbers, dashes and underscores." }
  validates_exclusion_of :username, in: %w(explore upload), message: "has already been taken"
  validates :fullname, :username, length: { minimum: 3, maximum: 32 }
  validates :password, length: { minimum: 6, allow_nil: true }

  validates :bio, length: { maximum: 150, message: "character limit (%{count}) exceeded" }

  has_attached_file :avatar, styles: { thumb: "150x150x" }, default_url: "default-user-avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  before_validation :ensure_session_token
  attr_reader :password

  has_many :photos,
    foreign_key: :author_id,
    class_name: :Photo,
    dependent: :destroy

  has_many :likes,
    dependent: :destroy

  has_many :comments,
    dependent: :destroy

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
