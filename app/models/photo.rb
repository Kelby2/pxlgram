class Photo < ApplicationRecord

  validates :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  # has_many :likes
  # has_many :comments


end
