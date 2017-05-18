class Listing < ApplicationRecord
  validates :owner_id, :lat, :lng, :price, :image_url, :title, :description, :city, :state, :country, presence: true

end
