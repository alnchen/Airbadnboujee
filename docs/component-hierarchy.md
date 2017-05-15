## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HeaderContainer**
 - NavbarLoggedIn
 - NavbarLoggedOut

**SearchContainer**
 - Search

**HomesContainer**
 - Homes

**FooterContainer**
 - Footer

**TripsContainer**
 - Trips

**ListingsContainer**
 - Listings

**BookingFormContainer**
 - BookingForm

**ReviewFormContainer**
 - ReviewForm

**ReviewsContainer**
 - Reviews

**SearchContainer**
 - MapContainer
 - ListingsContainer

**ListingFormContainer**
 - ListingForm



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HeaderContainer" |
| "/home" | "HomesContainer" |
| "/home" | "SearchContainer" |
| "/home" | "FooterContainer" |
| "/trips" | "TripsContainer" |
| "/listings/:listingId" | "ListingsContainer" |
| "/listings/:listingId" | "BookingFormContainer" |
| "/listings/:listingId" | "ReviewsContainer" |
| "/listings/:listingId" | "ReviewFormContainer" |
| "/newListing" | "ListingContainer" |
