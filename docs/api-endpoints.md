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

- `Will be nested within a listing`

### Reviews

- `POST /api/listings/:id/reviews`
  - Create new review for listing
