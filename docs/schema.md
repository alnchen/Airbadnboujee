## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null, indexed, unique
session_token   | string    | not null, indexed, unique

## listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
lat         | float     | not null
lng         | float     | not null
price       | integer   | not null
image_url   | string    | not null
title       | string    | not null
description | string    | not null
city        | string    | not null
state       | string    | not null
country     | string    | not null
bookings

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
booker_id   | integer   | not null, foreign key (references users)
listing_id  | integer   | not null, foreign key (references listings )
start_date  | date      | not null
end_date    | date      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_Id   | integer   | not null, foreign key (references users)
listing_Id  | integer   | not null, foreign key (references spot )
rating      | integer   | not null,
body        | string    | not null
