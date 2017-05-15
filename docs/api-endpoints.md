# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
  - Create a user


### Session

- `POST /api/session`
  - Log In
- `DELETE /api/session`
  - Log Out

### Listings

- `GET /api/listings`
  - Show all listings
- `POST /api/listings`
  - Create a listing
- `GET /api/listings/:id`
  - Show one listing

### Bookings

- `GET /api/listings/:id/bookings`
  - Show all bookings
- `POST /api/listings/:id/bookings/:id`
  - Create a booking
- `GET /api/listings/:id/bookings`
  - Show all bookings for listing(:id)
- `DELETE /api/listings/:id/bookings/:id`
  - User can cancel a booking

### Reviews

- `GET /api/listings/:id/reviews`
  - Show all reviews for one listing
- `POST /api/listings/:id/reviews`
  - Create new review for listing
