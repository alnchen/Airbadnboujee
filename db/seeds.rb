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

Listing.create(
                owner_id: 1,
                lat: '23.1162',
                lng: '143.1745',
                price: 452,
                image_url: 'http://cdn.homedsgn.com/wp-content/uploads/2014/05/Modern-Mansion-on-Sunset-Plaza-Drive-06.jpg',
                title: 'Huge mansion. Perfect for billionaire parties.',
                description: 'Your own white house! 7 Bedroom with 5 Bath in South Carolina',
                city: 'Anaheim',
                state: 'California',
                country: 'USA'
              )

Listing.create(
                owner_id: 1,
                lat: '31.1162',
                lng: '145.1745',
                price: 2330,
                image_url: 'http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/08/26/100987825-121017_EJ_stone_mansion_0014r.1910x1000.jpg',
                title: '230 Rooms. Maybach not included.',
                description: 'Boujie.',
                city: 'New York',
                state: 'New York',
                country: 'USA'
              )

Listing.create(
                owner_id: 1,
                lat: '39.1422',
                lng: '137.1735',
                price: 3218,
                image_url: 'http://ww1.hdnux.com/photos/56/50/72/12226228/3/1024x1024.jpg',
                title: 'Right by OB! Hear the waves as you sleep.',
                description: 'San Diego at it\'s finest!',
                city: 'San Diego',
                state: 'California',
                country: 'USA'
              )

Listing.create(
                owner_id: 1,
                lat: '34.1212',
                lng: '134.1456',
                price: 5238,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/22/d9/bd/22d9bd1bf9cf54831051b6906e50ead7.jpg',
                title: 'My home. Yes, I am Iron Man',
                description: 'Disclaimer: The Mandarin might come attack us. I gave him my address.',
                city: 'Malibu',
                state: 'California',
                country: 'USA'
              )
