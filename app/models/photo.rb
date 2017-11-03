class Photo < ApplicationRecord

  validates :author_id, presence: true
  has_attached_file :image, default_url: "default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    foreign_key: :photo_id,
    class_name: :Like

  has_many :likers,
    through: :likes,
    source: :user

  has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment

  has_many :commenters,
    through: :comments,
    source: :user

end
