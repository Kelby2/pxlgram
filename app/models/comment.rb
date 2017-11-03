class Comment < ApplicationRecord

  validates :body, presence: true, length: { maximum: 420 }

  belongs_to :user
  belongs_to :photo

end
