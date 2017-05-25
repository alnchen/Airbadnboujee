json.extract! @listing, :id, :lat, :lng, :owner_id, :price, :description, :title, :city, :state, :country, :image_url, :max_guests
json.image_url asset_path(@listing.image_url)

json.reviews @listing.reviews
