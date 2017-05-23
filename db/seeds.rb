# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

tom = User.create(email: 'tom@myspace.com', password: 'password')
jerry = User.create(email: 'jerry@xanga.com', password: 'password')


Listing.create!(
                owner_id: 1,
                lat: 37.7884,
                lng: -122.4076,
                price: 1015,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/ab/d4/82/abd482f0bbf7b2ea4a9672ea195eadeb.jpg',
                title: 'Grand entrance into San Francisco!',
                description: "8,800 sf, 8+ bedroom, epic mansion! Huge, beautiful mansion with vast outdoor space. The house's beauty is featured in dozens of catalogs, including Pottery Barn, Williams Sonoma, Gumps, Cost Plus, & Loews. Designed by Augustus Laver, the architect of the Flood Mansion, home of the Pacific Union Club, a major San Francisco landmark. At least 15 beds; more for a fee. Fully stocked kitchen. Charges apply for all guests, DAY OR NIGHT. For small groups, I will lower the rate and lock 1-2 unneeded bedrooms & bathrooms.",
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 20
                )

Listing.create!(
                owner_id: 1,
                lat: 37.5453,
                lng: -122.4368,
                price: 495,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/fb/68/b4/fb68b4caeb3bd3a4300fc61cea76132f.jpg',
                title: 'Family house with Game Room!',
                description: 'Game room and 4 beds (5 possible): The top floor is mostly one very large, wide open space, with beds, games and a half bathroom (no shower or tub). It has four twin beds. It also has a full size "click clack" sofa bed. This will be a sofa unless you request a bed (fees may apply). There is a big "arcade size" air hockey table, and a smaller (not "arcade size") shuffleboard table, board games, puzzles and more..',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 12
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7853,
                lng: -122.4081,
                price: 215,
                image_url: 'http://s1.r29static.com//bin/entry/3b5/x,80/1566903/image.jpg',
                title: 'Right near Union Squre',
                description: 'Enjoy your stay in this amazing condo located an aquarium. Room contains a king size bed with firm mattress, 2 nightstands, 40'' TV and a build-in closet and a fish tank with beautiful Malawi Cichlids. Could be perfect for a single person or a couple visiting San Francisco.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 2
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7537,
                lng: -122.4168,
                price: 695,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/28/59/b9/2859b92a7f4ed5fa674711c797bc2bd4.jpg',
                title: 'Vacation ready, equipped with a bowling alley and bar!',
                description: 'This luxury home boasts epic proportions and an array of fabulous facilities. Spanning across 15,000 square feet of spectacular living space this vast property includes a bowling alley, squash & basketball court, home cinema, game room, spa, and gym..',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 12
                )

Listing.create!(
                owner_id: 1,
                lat: 37.8591,
                lng: -122.4853,
                price: 300,
                image_url: 'http://d751626467d7f300fc09-8b5ab94d6c0e85f41c767cd488d9c749.r17.cf1.rackcdn.com/020.jpg',
                title: 'Watch the sunset/sunrise from the 50th floor!',
                description: 'This beautiful condo is located on the 50th Floor of the Place Tower facing the San Francisco Bay. I just purchased this unit and it is newly refurbished by the hotel with brand new furniture, wall coverings & flooring. The best feature of this condo is the large balcony with expansive views. I keep the balcony open at all times for my guests to enjoy the outdoor space and relax while taking in the breathtaking views.',
                city: 'Sausolito',
                state: 'California',
                country: 'USA',
                max_guests: 10
                )

Listing.create!(
                owner_id: 1,
                lat: 37.8735,
                lng: -122.4566,
                price: 275,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/c2/44/3b/c2443b74dd8be20fd8d34d97d64bbda8.jpg',
                title: 'Live in color!',
                description: 'It is a newly remodeled town house with a modern design with every room filled with so much art. Many people love the creative, colorful vibrations it exudes. The room is filled with art in many forms, photography, and painted fabrics.',
                city: 'Tiburon',
                state: 'California',
                country: 'USA',
                max_guests: 4
                )

Listing.create!(
                owner_id: 2,
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


Listing.create!(
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

Listing.create!(
                owner_id: 2,
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

Listing.create!(
                owner_id: 2,
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
                owner_id: 1,
                lat: 37.5741,
                lng: -122.3794,
                price: 300,
                image_url: 'http://4cb3fadd15deceda8450-0977690290ec84d574463feb716239f3.r55.cf1.rackcdn.com/A_11.jpg',
                title: 'Live like the Flintstones!',
                description: "It's a fantastic cave-house located just outside of San Francisco. Flintstone house is an exceptional property and spend a few days in it becomes a unique experience, sunny terrace with fantastic views. Capacity 7 guests.",
                city: 'Hillsborough',
                state: 'California',
                country: 'USA',
                max_guests: 40
                )

Listing.create!(
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
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

Listing.create!(
                owner_id: 1,
                lat: 37.7903,
                lng: -122.3961,
                price: 350,
                image_url: 'https://static01.nyt.com/images/2012/10/21/realestate/21COV3/Cove-jp-1-jumbo.jpg',
                title: 'Techie or not, this SF property suits you',
                description: 'Constructed in 2015, this 60 story tower offers perfect views and comfort during your stay. Located in the center of downtown San Francisco, you are at walkable distances to many shops and restaurants.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 6
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7852,
                lng: -122.4043,
                price: 375,
                image_url: 'https://sanfranciscoarchitects.files.wordpress.com/2017/03/gallery_house_e_facade_746x1000.jpg?w=760',
                title: 'It’s not always about the size!',
                description: 'This cozy property offers visitors an unique San Francisco experience. Enjoy natural sunlight and magnificent views with the gorgeous panoramic windows. Located in the mission, you are close to many bars and restaurants.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 6
                )


Listing.create!(
                owner_id: 1,
                lat: 37.8716,
                lng: -122.2727,
                price: 314,
                image_url: 'https://puu.sh/vWAlK/fd3e1e4c88.jpg',
                title: 'Cal Bears all welcomed!',
                description: 'Sunrise or sunset, the views from virtually every window are infinitely inspirational. And the art and artistry of the design, materials, and construction, are no less divine. Every detail, from the infinity lap pool, to the copper topped domes, to the hand-picked stone, has been thoughtfully set in its place to create! a sublime symmetry, and a balance with the beauty of the natural surroundings.',
                city: 'Berkeley',
                state: 'California',
                country: 'USA',
                max_guests: 6
                )


Listing.create!(
                owner_id: 1,
                lat: 32.7353,
                lng: -117.1490,
                price: 215,
                image_url: 'http://sandiegorealestateconnects.com/files/2012/07/Electra-2603-24.jpg',
                title: 'Vacation ready, this studio is for you!',
                description: 'Gorgeous studio in downtown San Diego located steps away from the Gas Lamp district. Property is furnished with a full size kitchen. Hangout on the private balcony while overlooking the city.  Visitors will have access to a swimming pool, hot tub and a gym.',
                city: 'San Diego',
                state: 'California',
                country: 'USA',
                max_guests: 4
                )

Listing.create!(
                owner_id: 1,
                lat: 33.8121,
                lng: -117.9190,
                price: 1955,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/63/bd/1d/63bd1d96ceeee528cbf2a7f4f5c9db19.jpg',
                title: "Dream in Sleeping Beauty’s Castle in Disneyland",
                description: "Sleep the night away comfortably in Disneyland's Sleeping Beauty Castle. Have the entire theme park to yourself!",
                city: 'Anaheim',
                state: 'California',
                country: 'USA',
                max_guests: 8
                )

Listing.create!(
                owner_id: 1,
                lat: 37.8144,
                lng: -122.4019,
                price: 650,
                image_url: 'http://conradgobalmediacenter.com/assets/CNRD/properties/International/ConradMaldivesRangaliIsland/ConradMaldivesUnderwaterSuite_HR.jpg',
                title: 'Live Under the Sea!',
                description: 'Gorgeous studio submerged underwater. Complete privacy with a designated elevator to take you down to your once in a life time experience.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 2
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7253,
                lng: -122.4190,
                price: 215,
                image_url: 'http://www.superyachtnews.com/articles/16584/desta%20small%203.jpg',
                title: 'Live in the San Francisco Bay, Literally!!!',
                description: 'This is a rare houseboat in the San Francisco Bay. There are 3 bedrooms on the upper level all include vanities. The middle floor has open Living and Kitchen area, shower room and bathroom. Lower lever is master suite with King bed and sitting area.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 10
                )

Listing.create!(
                owner_id: 1,
                lat: 37.9449,
                lng: -122.5088,
                price: 150,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/9c/f9/46/9cf946386eeb12d40103e51c68c08eb0.jpg',
                title: 'THE 5 MILLION STAR VIEW – UNCENSORED',
                description: 'Lay in the bed. Turn off the lamp and start counting. The bubble structure is kept inflated by a slight over-pressure from a noiseless ventilation system. It permanently renews the air inside 2-7 times the volume per hour and this way it prevents humidity. The system has heating elements with thermostat so the bubble stays warm all winter.',
                city: 'Larkspur',
                state: 'California',
                country: 'USA',
                max_guests: 4
                )

Listing.create!(
                owner_id: 1,
                lat: 37.8313,
                lng: -122.2852,
                price: 450,
                image_url: 'http://thedisneyblog.com/wp-content/uploads/2011/07/photo1-lrg.jpg',
                title: 'Pixar Dream Come True',
                description: 'Inspired by the movie Up, this cozy home is located on the Pixar campus in Emeryville, California. You will have full access to the Finding Nemo swimming pool, Toy Story basketball court, and your own personal golf cart to explore the campus.',
                city: 'Emeryville',
                state: 'California',
                country: 'USA',
                max_guests: 4
                )
