# == Schema Information
#
# Table name: followings
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Following < ApplicationRecord

  validates :follower_id, :followee_id, presence: true
  validate :disable_self_follow

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: 'User'

  belongs_to :followee,
    foreign_key: :followee_id,
    class_name: 'User'

  private

  def disable_self_follow
    # validation on db level
    # users should not be able to follow themselves

    if follower_id == followee_id
      errors.add(:followee_id, "You cannot follow yourself.")
    end
  end
end
