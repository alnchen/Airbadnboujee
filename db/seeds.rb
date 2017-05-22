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
                lat: 34.0430,
                lng: -118.2673,
                price: 324,
                image_url: 'http://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/worlds_ticket_venue_staple_0.jpg?raUwTix6je95wRWJHMPoAWnu.M7v1ign&itok=zMWl7yp-',
                title: 'Staples Center',
                description: 'Home of the 2018 NBA Champions, LA Clippers',
                city: 'Los Angeles',
                state: 'California',
                country: 'USA',
                max_guests: 18000,
              )

Listing.create(
                owner_id: 1,
                lat: 36.1162,
                lng: -115.1745,
                price: 930,
                image_url: 'http://i.dailymail.co.uk/i/pix/2015/04/29/14/2822CDF700000578-3060715-image-a-8_1430312882049.jpg',
                title: 'Caesars Palace Open View Penthouse',
                description: 'What better way to start your trip in sin city than staying in a room with an open ceiling?',
                city: 'Las Vegas',
                state: 'Nevada',
                country: 'USA',
                max_guests: 4
              )

Listing.create(
                owner_id: 1,
                lat: 34.1162,
                lng: -118.1735,
                price: 452,
                image_url: 'http://cdn.homedsgn.com/wp-content/uploads/2014/05/Modern-Mansion-on-Sunset-Plaza-Drive-06.jpg',
                title: 'Huge mansion. Perfect for billionaire parties.',
                description: 'Your own white house! 7 Bedroom with 5 Bath in South Carolina',
                city: 'Anaheim',
                state: 'California',
                country: 'USA',
                max_guests: 20
              )

Listing.create(
                owner_id: 1,
                lat: 34.1162,
                lng: -118.345,
                price: 2330,
                image_url: 'http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/08/26/100987825-121017_EJ_stone_mansion_0014r.1910x1000.jpg',
                title: '620 Rooms. Maybach not included.',
                description: 'Boujie.',
                city: 'Los Angeles',
                state: 'California',
                country: 'USA',
                max_guests: 500
              )

Listing.create(
                owner_id: 1,
                lat: 32.7422,
                lng: -117.1735,
                price: 3218,
                image_url: 'http://ww1.hdnux.com/photos/56/50/72/12226228/3/1024x1024.jpg',
                title: 'Right by OB! Hear the waves as you sleep.',
                description: 'San Diego at it\'s finest!',
                city: 'San Diego',
                state: 'California',
                country: 'USA',
                max_guests: 2
              )

Listing.create(
                owner_id: 1,
                lat: 34.0212,
                lng: -118.7798,
                price: 5238,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/22/d9/bd/22d9bd1bf9cf54831051b6906e50ead7.jpg',
                title: 'My home. Yes, I am Iron Man',
                description: 'Disclaimer: The Mandarin might come attack us. I gave him my address.',
                city: 'Malibu',
                state: 'California',
                country: 'USA',
                max_guests: 25
              )

Listing.create(
               owner_id: 1,
               lat: 34.1341,
               lng: -118.3215,
               price: 600,
               image_url: 'http://static6.businessinsider.com/image/5319e2fd6bb3f74a1f0acca4/house-of-the-day-swedish-dj-avicii-spent-155-million-on-this-bonkers-mansion-in-the-hollywood-hills.jpg',
               title: 'Hollywood sign in your backyard.',
               description: 'Deck with stunning views of the Los Angeles skyline, Griffith Park, and the Hollywood Sign. Located atop Beachwood Canyon, one of LA\'s most popular and unique neighborhoods, the house sits high above the city yet a short drive from all the excitement. ',
               city: 'Hollywood',
               state: 'California',
               country: 'USA',
               max_guests: 2
             )

Listing.create(
               owner_id: 1,
               lat: 37.7763,
               lng: -122.4328,
               price: 415,
               image_url: 'https://s-media-cache-ak0.pinimg.com/originals/3e/d2/e5/3ed2e508b26bd740ed368014fdc1da69.jpg',
               title: 'Stay in the world famous San Francisco Painted Ladies!',
               description: 'Looking for a once-in-a-lifetime way to spend a night in San Francisco? Get the true San Franciscan experience by living in the city\'s most famous victorian home.',
               city: 'San Francisco',
               state: 'California',
               country: 'USA',
               max_guests: 4
             )

Listing.create(
               owner_id: 1,
               lat: 36.1699,
               lng: -115.1398,
               price: 1000,
               image_url: 'https://blog.travefy.com/wp-content/uploads/2015/05/hugh-hefner-sky-villa-palms-las-vegas.jpg',
               title: 'Palms Playboy Bunny Penthouse Suite.',
               description: 'Stay on the 57th floor of the Palms Hotel. Luxurous Penthouse at Palms Place, 2 bedrooms plus a media room, top floor, over 500 feet in the air with incredible unobstructed view of the entire Strip, downtown and the city.',
               city: 'Las Vegas',
               state: 'Nevada',
               country: 'USA',
               max_guests: 15
             )

Listing.create(
               owner_id: 1,
               lat: 37.5741,
               lng: -122.3794,
               price: 300,
               image_url: 'http://4cb3fadd15deceda8450-0977690290ec84d574463feb716239f3.r55.cf1.rackcdn.com/A_11.jpg',
               title: 'Live like the Flintstones!',
               description: 'It\'s a fantastic cave-house located just outside of San Francisco. Flintstone house is an exceptional property and spend a few days in it becomes a unique experience, sunny terrace with fantastic views. Capacity 7 guests.',
               city: 'Hillsborough',
               state: 'California',
               country: 'USA',
               max_guests: 40
             )

Listing.create(
               owner_id: 1,
               lat: 34.0412,
               lng: -118.4426,
               price: 888,
               image_url: 'http://www.homeandecor.net/wp-content/uploads/2016/05/ai-home-cinama-design-ideas-18.jpg',
               title: 'Live like a celebrity with your own theater!',
               description: 'New home w/panoramic views of the ocean/main channel/city lights. Steam rooms, saunas, stone jacuzzi oasis, movie theatre, game room w/professional billiards table, and a guest house. Custom glass windows & doors throughout the house provide a spectacular 180 degree view from every angle. Panoramic views span down all floors with an amazing rooftop deck & seated patios on every floor. Spend one night here & you\'ll appreciate the house & the entire experience.',
               city: 'West Los Angeles',
               state: 'California',
               country: 'USA',
               max_guests: 8
             )

Listing.create(
               owner_id: 1,
               lat: 34.1005,
               lng: -118.3702,
               price: 1200,
               image_url: 'https://static1.squarespace.com/static/52292291e4b046b16fdae37c/563907d2e4b05c696317e66f/563908cfe4b08b90796199de/1446578385470/02_MCT_Stahl_House.jpg',
               title: 'The Iconic Stahl House.',
               description: 'Modernist-styled home designed by architect Pierre Koenig in the Hollywood Hills. Currently listed on the National Register of History Places. An eventide panoramic view of the city through floor-to-ceiling glass walls.',
               city: 'Los Angeles',
               state: 'California',
               country: 'USA',
               max_guests: 6
             )

Listing.create(
               owner_id: 1,
               lat: 36.1662,
               lng: -115.1745,
               price: 452,
               image_url: 'http://eaudusoleil-empire.com/resources/eau%20du%20Soliel%20suites.jpg',
               title: 'Roll in style with my crib!',
               description: 'The penthouse offers a captivating view of the glittering city below. Sprawled out over 4,000 square feet of living space. Sleeps 8.',
               city: 'Las Vegas',
               state: 'California',
               country: 'USA',
               max_guests: 6
             )

Listing.create(
               owner_id: 1,
               lat: 34.0736,
               lng: -118.4004,
               price: 550,
               image_url: 'https://s-media-cache-ak0.pinimg.com/originals/b5/75/4e/b5754edd6e8535492a6dc5d63ab49bac.jpg',
               title: '4BD Smart Home w/ Pool & Game Room',
               description: 'Smart Home located in Beverly Hills. 4 bedrooms + an office allow for multiple occasions. The home is equipped with Smart Home technology (controlled by Amazon Echo\'s Alexa Voice Activation, 5 smart TV\'s (70" and 55"), lap pool, game/recreation room, Hi-speed internet, and remodeled kitchen. Located close to shopping and dining.',
               city: 'Beverly Hills',
               state: 'California',
               country: 'USA',
               max_guests: 10
             )

Listing.create(
              owner_id: 1,
              lat: 34.1177,
              lng: -118.3520,
              price: 426,
              image_url: 'http://static2.businessinsider.com/image/570c06d79105841d008bbf74-1200/ted-waitt-bird-streets-house.jpg',
              title: 'Watch the stars through the ceiling!',
              description: 'Built in 2009, the contemporary-style home has a colorful feel with stone walls, vibrant wood finishes and exotic lighting fixtures. Requisite walls of floor-to-ceiling glass have sprawling city, canyon and ocean views.',
              city: 'Los Angeles',
              state: 'California',
              country: 'USA',
              max_guests: 8
            )

Listing.create(
              owner_id: 2,
              lat: 34.0814,
              lng: -118.4299,
              price: 693,
              image_url: 'http://www.idesignarch.com/wp-content/uploads/French-Chateau-Style-Mansion_2.jpg',
              title: 'For the artist in you, this is built for the ultimate Renaissance man',
              description: 'The Manor, located at 594 S. Mapleton Drive in the Holmby Hills neighborhood in Los Angeles, California is a stunning 56,500 square feet mansion on a 4.6 acre lot. Designed by architects James Langenheim & Associates, the French Chateau style mansion has 14 bedrooms, 27 bathrooms, a billiards room, bowling alley, arcade room, swimming pool, tennis courts, and servants quarters.',
              city: 'Los Angeles',
              state: 'California',
              country: 'USA',
              max_guests: 14
            )

Listing.create(
              owner_id: 1,
              lat: 33.0203,
              lng: -117.2028,
              price: 425,
              image_url: 'http://www.catherineandjasonbarry.com/wp-content/uploads/2016/07/49_8092506_KY8A5011_copy.jpg',
              title: 'For the Pure Nature Lover!',
              description: 'This 6.75 all usable view acre estate excites the senses immediately as one enters the grand iron gates. As you drive past the cascading waterfalls through the lush tropical vegetation, you are welcomed to a stunning foyer. Massive arched windows beckon you into the formal living room with picturesque resort pool and waterfall views.',
              city: 'San Diego',
              state: 'California',
              country: 'USA',
              max_guests: 12
            )
