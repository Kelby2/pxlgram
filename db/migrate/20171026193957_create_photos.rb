class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :author_id, null: false
      t.string :caption

      t.timestamps
    end
  end
end
