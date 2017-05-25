class Review < ApplicationRecord
  validates :author_id, :listing_id, :rating, :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: 'Listing'

end
