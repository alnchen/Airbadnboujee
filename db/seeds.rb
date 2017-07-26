# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

tom = User.create(email: 'tom@myspace.com', password: 'password', image_url: 'https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg')
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
                price: 230,
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
                city: 'Sausalito',
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
                price: 220,
                image_url: 'http://sandiegorealestateconnects.com/files/2012/07/Electra-2603-24.jpg',
                title: 'Perfect for the nightlife enthusiast',
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
                price: 185,
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
                lat: 37.7884,
                lng: -122.4076,
                price: 200,
                image_url: 'http://becore.com/wp-content/uploads/2015/06/nike.jpg',
                title: 'Vacation in a Nike Popup Shop!',
                description: 'Behind the shop is a condo that can fit 2 people. Located in the heart of Downtown San Francisco across from Union Square.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 2
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7924,
                lng: -122.4106,
                price: 285,
                image_url: 'http://www.xoprivate.com/wp-content/uploads/2016/07/Hotel-Villa-Honegg-Switzerland-Room.jpg',
                title: 'Fairmont Hotel Penthouse!',
                description: 'Gorgeous penthouse with a panoramic view of the City and the Bay from high atop Nob Hill, Fairmont San Francisco hotel presents an unmatched blend of luxurious accommodations, elegant meeting spaces and superb services, which make for an unforgettable stay.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 2
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7353,
                lng: -122.4863,
                price: 375,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/ca/a7/fd/caa7fd319b1e7abc5e6b62721590b836.jpg',
                title: 'Waterfront Home',
                description: "Entire apartment (accommodates four): one bedroom; one bathroom. The newly renovated space has a mounted 65in HDTV, a Sonos sound system, washer/dryer, and bay views. Guests also get full access to the building’s complimentary services and pool (and weekend rooftop deck).",
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 4
                )

Listing.create!(
                owner_id: 1,
                lat: 34.0782,
                lng: -118.2606,
                price: 220,
                image_url: 'http://static1.businessinsider.com/image/570c047a910584145c8bbbaf/the-billionaire-cofounder-of-gateway-has-sold-his-18-million-los-angeles-mansion.jpg',
                title: 'The Kardashians drive by my place 3 times a day',
                description: "Our Fashionista House is part of a neighborhood that provides visitors with the best of Los Angeles – E of miracle mile- it's more centrally located than Hollywood and surrounded by great dining, shopping and is just steps from the Wilshire / Normandie Station purple line.",
                city: 'Los Angeles',
                state: 'California',
                country: 'USA',
                max_guests: 3
                )

Listing.create!(
                owner_id: 1,
                lat: 37.8733,
                lng: -122.4566,
                price: 240,
                image_url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/579/57913930.jpg',
                title: 'The Best Getaway From The Bay Area Tech Life',
                description: "Our home is very unique. It's in a quiet and very safe neighborhood, close to public transit, shops and restaurants. We make our guests feel very welcome by offering them breakfast foods, and they can enjoy coffee and tea throughout the day and relax on our sunny back deck or sit in our back yard. We can also pick up people from the airport or train station at no extra charge..",
                city: 'Tiburon',
                state: 'California',
                country: 'USA',
                max_guests: 4
                )

Listing.create!(
                owner_id: 1,
                lat: 39.9255,
                lng: -122.5275,
                price: 1200,
                image_url: 'https://s3.amazonaws.com/winecountry-media/wp-content/uploads/sites/4/2015/06/Domaine-Carneros-chateau.jpg',
                title: 'La Chambre Bleue',
                description: 'La Chambre Bleue is one of 5 great rooms with views on top floor which has 2 baths. Please note that it is not just one room. The top floor (see photos) has 3 private bedrooms each with a CA king size bed, a Home Theater room that sleeps 4, and a more secluded 4th bedroom. Great amenities on main floor, views, music, and wine/dine pairing provide a true French Chateau experience. Come experience what a $2 Million Chateau is like and living your dream away from the hustle of the cities.',
                city: 'Corte Madera',
                state: 'California',
                country: 'USA',
                max_guests: 18
                )

Listing.create!(
                owner_id: 1,
                lat: 37.9005,
                lng: -122.6444,
                price: 1500,
                image_url: 'https://photonet.hotpads.com/search/listingPhoto/ZillowSale/2101302044/0000_1953817957_large.jpg',
                title: 'Willow Camp Estate and Gardens!',
                description: "Willow Camp Estate and Gardens is an ideal location for weddings, family reunions, retreats, conferences and other special celebrations. Located in the heart of Stinson Beach, it's a short walk to restaurants and shops with it's own beach entry. Tax not included. More info at willow-camp dott comm Weddings and other events are 10,000 per weekend and 12,000 weekly, Summer's are 15,000 per weekend and 17,000 per week.",
                city: 'Stinson Beach',
                state: 'California',
                country: 'USA',
                max_guests: 20
                )

Listing.create!(
                owner_id: 1,
                lat: 37.8353,
                lng: -122.4886,
                price: 2000,
                image_url: 'https://images.contentful.com/tncnbuc6u1l7/NQrf3TR5iCYywgUEo6Wye/a43f8cbf4241b4335438366bcd5af55d/embed-01-le-palais-royal-05.jpg',
                title: 'Your own White House',
                description: "Comfortable house, modern, bright and functional. Eight bedrooms and five full bath and three half bath, two large living rooms, fully equipped kitchen with a separate space for breakfast, a beautiful garden with pergola. Two parking spaces inside. Centrally Located..",
                city: 'Sausalito',
                state: 'California',
                country: 'USA',
                max_guests: 20
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7701,
                lng: -122.4704,
                price: 200,
                image_url: 'http://citylimits.org/wp-content/uploads/2016/03/Partenit-Japanese-Garden-2_c_Shiro-Nakane-1170x780.jpg',
                title: 'Traditional Japanese Garden House',
                description: 'Enjoy the ambiance of a traditional Japanese house with shoji screens and tatami mats. Contemplate the features of the beautiful gardens before tucking in for a quiet night’s sleep.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 2
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7599,
                lng: -122.4148,
                price: 215,
                image_url: 'http://www.museumofthecity.org/wp-content/uploads/2013/09/mission.jpg',
                title: 'Live Colorfully in San Francisco’s Mission District ',
                description: "If you are looking for a less traditional but comfortable space to call home while you are visiting San Francisco this is a great place to lay your hat. The 2 bedroom house is the perfect size for a couple or individual wanting a central location.",
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 2
                )

Listing.create(
               owner_id: 1,
               lat: 35.8384,
               lng: -115.2709,
               price: 300,
               image_url: 'https://s3.amazonaws.com/citybuzz/2016/01/best-places-to-live-in-california-for-democrats-and-republicans/best-places-to-live-in-california-for-democrats-and-republicans-1.jpg',
               title: 'LUXURY MANSION minutes from Strip!',
               description: 'Our 5,000 sq. ft. property provides a comfortable, relaxing, and tranquil retreat just minutes from the Las Vegas Strip. Have the convenience of staying in the same spacious, fully furnished house with family and friends!',
               city: 'Las Vegas',
               state: 'California',
               country: 'USA',
               max_guests: 16
               )

Listing.create!(
                owner_id: 1,
                lat: 34.2439,
                lng: -116.9114,
                price: 350,
                image_url: 'https://www.buildingpartnershipsma.org/wp-content/uploads/2015/10/swimming-pools-with-a-garage-door-picture.jpg',
                title: 'Zen Retreat',
                description: 'There are 2 nice sized bedrooms each with a Queen Bed with a sleeping Loft and comfy couch which Sleeps 6-7 and bathroom, kitchen dining room living room. There is a fireplace that is best for duraflame logs. Please note that the mountain well water has a naturally occurring sulphur odor, the water safe to drink but the water pressure is a bit Appalachian. All amenities including internet, cell phone, d/w, ac, downstairs there is an exercise room and 1/2 bath and laundry and garage. There is an above ground pool off the deck in the back',
                city: 'Big Bear Lake',
                state: 'California',
                country: 'USA',
                max_guests: 8
                )

Listing.create!(
                owner_id: 1,
                lat: 32.7157,
                lng: -117.1611,
                price: 550,
                image_url: 'http://idolza.com/a/f/a/architecture-page-home-decor-categories-bjyapu-amazing-beachfront-villa-with-tropical-style-in-bali-architectural-digest-design-show_contemporary-architecture-houses_interior-ideas-for-home.jpg',
                title: 'Bali Inspired Villa',
                description: 'Comfortable and very beautiful villa. Fully-equipped kitchen, 3 bedrooms, 3 bathrooms, secure private area, 2 heated pools and 1 jacuzzi.',
                city: 'San Diego',
                state: 'California',
                country: 'USA',
                max_guests: 10
                )

Listing.create!(
                owner_id: 1,
                lat: 34.0736,
                lng: -118.4004,
                price: 800,
                image_url: 'https://i.ytimg.com/vi/i-bOZP0Zdy8/maxresdefault.jpg',
                title: 'Stunning A List Celebrity Compound',
                description: 'A List Celebrity Couple Have Moved Out. Private Compound On 3/4 Of An Acre In The Hollywood Hills. This Magnificent Home Was Newly Renovated To the Highest Standards. Breathtaking Views & Total Privacy At This Extraordinary Property.',
                city: 'Beverly Hills',
                state: 'California',
                country: 'USA',
                max_guests: 6
                )

Listing.create!(
                owner_id: 1,
                lat: 34.1367,
                lng: -118.6615,
                price: 695,
                image_url: 'https://i.ytimg.com/vi/piMPTIu1UD8/maxresdefault.jpg',
                title: 'Spanish Influence Home',
                description: "Feel like a local in our irresistible Spanish-style four bedroom/three bathroom home. You’re walking distance to so many of Beverly Hills and West Hollywood's most popular restaurants, bars and shopping. Beverly Center! Rodeo Drive! Melrose! The house is beautifully furnished with custom and designer furniture and includes a spacious backyard. It is also equipped with Wi-Fi, cable, Roku, computer, and printer. Great for families, groups of friends, and furry travel companions.",
                city: 'Calabasas',
                state: 'California',
                country: 'USA',
                max_guests: 8
                )

Listing.create!(
                owner_id: 1,
                lat: 34.0259,
                lng: -118.7798,
                price: 1200,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/c4/0f/90/c40f9020c9d48cac2a1a330fbb8576d1.jpg',
                title: 'Malibu Beach House',
                description: 'A beautiful 8-bedroom Malibu beach house on a private beach with doors that open onto a 70ft.-long deck! Waterfall shower heads with glass walls that separates shower from bathroom. Second bathroom also has separate shower and a jacuzzi..',
                city: 'Malibu',
                state: 'California',
                country: 'USA',
                max_guests: 18
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7467,
                lng: -122.4863,
                price: 900,
                image_url: 'http://3d-realview.com/wp-content/uploads/2014/12/Malibu-03-0001.jpg',
                title: 'Spacious Home In the Sunset District',
                description: 'Perfect studio in the heart of San Francisco minutes away from Ocean Beach. Enjoy this open, bright and secure place with lovely views of the city skyline.',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 10
                )

Listing.create!(
                owner_id: 1,
                lat: 37.8037,
                lng: -122.4368,
                price: 625,
                image_url: 'http://cdn.homedsgn.com/wp-content/uploads/2011/08/32852-Pacific-Coast-Highway-01.jpg',
                title: 'Huge Cobblestone Bed and Breakfast',
                description: 'Simple, Modern, Comfort and Elegance. Take a step back in thyme to this turn of the century country manor. Every season offers a reason to visit this enchanting B&B. On a lazy summer afternoon, down to the pool for a dip , or sip a glass of wine.',
                city: 'San Francisco ',
                state: 'California',
                country: 'USA',
                max_guests: 12
                )

Listing.create!(
                owner_id: 1,
                lat: 38.5584,
                lng: -122.5426,
                price: 599,
                image_url: 'https://res.cloudinary.com/simpleview/image/upload/crm/napavalley/HR-Castle_Wide_Fall_Full-e0581a2d5056a36_87e85a2c-5056-a36a-081d37b817e97024.jpg',
                title: 'Castello di Amorosa',
                description: 'Castello di Amorosa is an historic and romantic winery located in the country side of Napa. We welcome our guests to stay on their very own 1st floor and enjoy the freedom of the grounds.',
                city: 'Napa',
                state: 'California',
                country: 'USA',
                max_guests: 10
                )

Listing.create!(
                owner_id: 1,
                lat: 38.2975,
                lng: -122.2869,
                price: 380,
                image_url: 'http://blog.visitnapavalley.com/wp-content/uploads/2016/07/Ghost-Wineries-of-Napa-Valley-Far-Niente.jpg',
                title: 'Five minutes from the best Napa Valley Vineyards',
                description: 'Fully renovated farmhouse Cottage. Two queen beds and additional twin bed for a fifth person. Full bathroom, couch, hd TV, dinette and kitchenette. Great patio space for enjoying the Napa wine and weather!.',
                city: 'Napa',
                state: 'California',
                country: 'USA',
                max_guests: 5
                )

Listing.create!(
                owner_id: 1,
                lat: 38.2939,
                lng: -122.3003,
                price: 245,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Darioush_Winery%2C_Napa_Valley%2C_California%2C_USA_%286036893059%29.jpg',
                title: 'Romantic Elegance + Vineyard Views',
                description: 'This is a gorgeous Tudor style home on a 3 acre vineyard in the heart of Napa Valley on Darioush Winery. 10 min to downtown Napa and biking distance to downtown Yountville.',
                city: 'Napa',
                state: 'California',
                country: 'USA',
                max_guests: 17
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7925,
                lng: -122.4382,
                price: 450,
                image_url: 'https://res.cloudinary.com/simpleview/image/upload/crm/napavalley/0_BER_RhineHouse_076A4959_Murad-1-_DC724997-F567-4CE8-BDFE1259F626D57E_f7ee429c-b5b1-4ecd-9a5a156e0c41e536.jpg',
                title: 'Luxury, modern aptartment in Pac Heights',
                description: 'Welcome to our remodeled home in Pacific Heights, right off of Union Street. You’ll love our place because of the steam shower, jet tub, laundry, and great location near Pacific Heights, Cow Hollow and the Marina. Our place is close to Starbucks, Roam Artisan Burgers, La Boulangerie, many bars, major bus lines and a short walk down to the Bay. Our top floor unit is quiet and is good for couples, solo adventurers, and business travelers. Welcome!',
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 6
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7925,
                lng: -122.4989,
                price: 375,
                image_url: 'https://s-media-cache-ak0.pinimg.com/originals/07/7d/83/077d83e7fc85dab9c9df37ec216ada90.jpg',
                title: '3600 sqft view home pacific heights',
                description: "Built in 2016, this two story house was exquisitely remodeled for modern living. 4 bedroom/3.5 bath home in Pacific Heights has incredible city & water views, is beautifully furnished and just blocks from shops and restaurants.",
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 8
                )

Listing.create!(
                owner_id: 1,
                lat: 37.7786,
                lng: -122.3893,
                price: 225,
                image_url: "http://generva.com/5/2014/11/architecture-designs-wooden-wall-exterior-home-design-with-grey-garage-using-white-door-los-in-atlanta-las-vegas-luxurious-decor-and-florida-dallas-interiors-unique-how-to-designs-a-luxury-modern-homes-with-garden-landsc.jpg",
                title: "Luxury 1BR Apt. Walk to AT&T Park, Union Sq, Train",
                description: "Upscale, cozy space with 9 ft. ceilings and a small balcony overlooking Mission Bay. Highly accessible location, less than 10-minute walk to AT&T Park, CalTrain, and MUNI! Also, our building is a Zipcar location..",
                city: 'San Francisco',
                state: 'California',
                country: 'USA',
                max_guests: 4
                )
