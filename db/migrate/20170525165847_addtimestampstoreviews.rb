class Addtimestampstoreviews < ActiveRecord::Migration[5.0]
  def change_table
    add_column(:reviews, :created_at, :datetime)
    add_column(:reviews, :updated_at, :datetime)
  end
end
