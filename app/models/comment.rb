# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  photo_id   :integer          not null
#

class Comment < ApplicationRecord

  validates :body, presence: true, length: { maximum: 420 }

  belongs_to :user
  belongs_to :photo

end
