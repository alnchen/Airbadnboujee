json.extract! @listing, :id, :lat, :lng, :owner_id, :price, :description
json.image_url asset_path(@listing.image_url)
