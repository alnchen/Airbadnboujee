class Listing < ApplicationRecord
  validates :owner_id, :lat, :lng, :price, :image_url, :title, :description, :city, :state, :country, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'
end
