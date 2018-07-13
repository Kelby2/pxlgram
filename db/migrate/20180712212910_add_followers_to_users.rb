class AddFollowersToUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false
      t.timestamps
    end
  end
end
