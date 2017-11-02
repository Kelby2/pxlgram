class Like < ApplicationRecord

  # belongs_to association should take care of this validation
  # validates :user_id, :photo_id, presence: true
  validates :user_id, uniqueness: {scope: :photo_id}

  belongs_to :user
  belongs_to :photo

end
