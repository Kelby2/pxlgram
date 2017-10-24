class CreateUsernames < ActiveRecord::Migration[5.1]
  def change
    create_table :user do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :fullname, null: false
      t.string :email, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :user, :username
  end
end
