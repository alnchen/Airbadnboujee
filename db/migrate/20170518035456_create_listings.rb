class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.integer "owner_id", null: false
      t.float "lat", null: false
      t.float "lng", null: false
      t.integer "price", null: false
      t.string "image_url", null: false
      t.string "title", null: false
      t.text "description", null: false
      t.string "city", null: false
      t.string "state", null: false
      t.string "country", null: false
      t.timestamps
    end
  end
end
