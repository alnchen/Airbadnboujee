@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :author, :listing_id, :rating, :body
  end
end
