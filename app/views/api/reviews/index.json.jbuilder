@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :author, :listing_id, :rating, :body
  end
end
