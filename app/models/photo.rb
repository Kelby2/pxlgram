# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  author_id          :integer          not null
#  caption            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ApplicationRecord

  validates :author_id, presence: true
  has_attached_file :image, styles: { resized: '600x600' }, default_url: "default.png"
  validates :image, attachment_presence: { message: "Please upload a photo to share"}

  validates_attachment :image,
    content_type: { content_type: /\Aimage\/.*\Z/, message: 'Invalid content type, please choose an image' },
    size: { in: 0..5.megabytes, message: "File size too large (Limit 5 MB)" }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :user

  has_many :comments,
    dependent: :destroy

  has_many :commenters,
    through: :comments,
    source: :user
end
