class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer 'author_id', null: false
      t.integer 'listing_id', null: false
      t.integer 'rating', null: false
      t.text 'body', null: false  
    end
  end
end
