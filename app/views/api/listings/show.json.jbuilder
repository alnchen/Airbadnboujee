json.extract! @listing, :id, :lat, :lng, :owner_id, :price, :description, :title, :city, :state, :country
json.image_url asset_path(@listing.image_url)
