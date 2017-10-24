class ChangeTableName < ActiveRecord::Migration[5.1]
  def change
    rename_table :user, :users
  end
end
