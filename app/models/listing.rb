class Listing < ApplicationRecord
  validates :owner_id, :lat, :lng, :price, :image_url, :title, :description, :city, :state, :country, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

end

# {
#     "northEast": {"lat":"30.80971", "lng":"-140.39208"},
#     "southWest": {"lat":"39.74187", "lng":"-115.47791"}
# }
