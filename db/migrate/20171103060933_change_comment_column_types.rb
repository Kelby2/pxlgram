class ChangeCommentColumnTypes < ActiveRecord::Migration[5.1]
  def change
    remove_column :comments, :user_id
    remove_column :comments, :photo_id
    add_column :comments, :user_id, :integer, null: false
    add_column :comments, :photo_id, :integer, null: false
  end
end
