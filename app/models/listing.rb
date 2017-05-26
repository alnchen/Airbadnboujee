class Listing < ApplicationRecord
  validates :owner, :lat, :lng, :price, :image_url, :title, :description, :city, :state, :country, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many :reviews,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: 'Review'

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def self.find_by_filters(city, guests)

    if city == ''
      listings = Listing.all
    else

      until city[-1] != ' '
        city = city[0..-2]
      end

      city = city.split(' ').map(&:capitalize).join(' ')

      listings = Listing.where(
      city: city
      )
    end

    # if bounds
    #   west_lng = bounds[:southWest][:lng]
    #   east_lng = bounds[:northEast][:lng]
    #   south_lat = bounds[:southWest][:lat]
    #   north_lat = bounds[:northEast][:lat]
    #
    #   listings = Listing.where(
    #     lat: (south_lat..north_lat),
    #     lng: (west_lng..east_lng),
    #   )
    # else
    #   listings = Listing.all
    # end

    # if start_date == "" || end_date == ""
    #   return listings
    # else
    #   return listings.select do |listing|
    #     listing.is_available?(Date.parse(start_date), Date.parse(end_date))
    #   end
    # end

    if guests == ''
      return listings
    else
      return listings.select { |listing| guests.to_i <= listing.max_guests }
    end
  end
end

# {
#     "northEast": {"lat":"30.80971", "lng":"-140.39208"},
#     "southWest": {"lat":"39.74187", "lng":"-115.47791"}
# }
