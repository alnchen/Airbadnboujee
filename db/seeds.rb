# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'tom@myspace.com', password: 'password')

Listing.create(
                owner_id: 1,
                lat: '34.0430',
                lng: '118.2673',
                price: 324,
                image_url: 'http://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/worlds_ticket_venue_staple_0.jpg?raUwTix6je95wRWJHMPoAWnu.M7v1ign&itok=zMWl7yp-',
                title: 'Staples Center',
                description: 'Home of the 2018 NBA Champions',
                city: 'Los Angeles',
                state: 'California',
                country: 'USA'
              )

Listing.create(
                owner_id: 1,
                lat: '36.1162',
                lng: '115.1745',
                price: 930,
                image_url: 'http://i.dailymail.co.uk/i/pix/2015/04/29/14/2822CDF700000578-3060715-image-a-8_1430312882049.jpg',
                title: 'Caesars Palace Open View Penthouse',
                description: 'What better way to start your trip in sin city than staying in a room with an open ceiling?',
                city: 'Las Vegas',
                state: 'Nevada',
                country: 'USA'
              )
