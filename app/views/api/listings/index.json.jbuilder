@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :city, :price, :lat, :lng, :image_url
  end
end
