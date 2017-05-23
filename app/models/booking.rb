class Booking < ApplicationRecord
  validates :user_id, :listing_id, :num_of_guests, :check_in, :check_out

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: 'Listing'

end
