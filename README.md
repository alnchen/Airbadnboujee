# AirBadnBoujee

[Live link][AirBadnBoujee].

[AirBadnBoujee]: http://www.airbadnboujee.com/#/

![screenshot](http://res.cloudinary.com/ac31624/image/upload/v1495837374/home_page_ffbyjh.png)

AirBadnBoujee is a fullstack web application inspired and modeled after Airbnb. This project was created through Ruby on Rails and a PostgreSQL powered database in the backend along with the combination of React and Redux in the frontend.

## Features & Implementation

##### Secure user accounts with authentication
* Users have ability to create new accounts or log in to previously created accounts
* Passwords during sessions are never stored but rather, encrypted using BCrypt
* Previous user information, including booked trips, are retrieved upon login


##### Location and filter based search
* Listings can be searched by city and will be prepopulated in search field using Google Maps Autocomplete
* Users can also find specific listing through filters, including number of guests
* Google Maps on search results page allow for geographical representation of listings through map markers with individual Map infowindows displaying title of listing

![screenshot](http://res.cloudinary.com/ac31624/image/upload/v1495837798/Screen_Shot_2017-05-26_at_3.29.19_PM_jq9eyu.png)


##### Bookings  
* Listings can be searched by city and will be prepopulated in search field using Google Maps Autocomplete
* Users can also find specific listing through filters, including number of guests
* Utilizing the official Airbnb React-Dates library allows users to select dates from a user-friendly calendar on booking form. Each selection triggers the creation of a Moments date object which can be parsed into an acceptable date format for PostgreSQL database storage

```javascript
import { DateRangePicker } from 'react-dates';

//within render of booking form
<DateRangePicker
  startDatePlaceholderText={'Check In'}
  endDatePlaceholderText={'Check Out'}
  startDate={this.state.startDate}
  endDate={this.state.endDate}
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate: startDate, endDate: endDate, errors: null })}
  focusedInput={this.state.focusedInput}
  onFocusChange={focusedInput => this.setState({ focusedInput })}
  minimumNights={0}
/>
```

##### Reviews
* Users are able to leave reviews for listings that are displayed to the public
* Reviews include a 1-10 rating system using star portrayal of values
* Utilizing the official Airbnb React-Dates library allows users to select dates from a user-friendly calendar on booking form. Each selection triggers the creation of a Moments date object which can be parsed into an acceptable date format for PostgreSQL database storage


##### Clean + Clear + Comfortable design
* Web application was designed with the highest priority of the user experience in mind

![screenshot](http://res.cloudinary.com/ac31624/image/upload/v1495838292/Screen_Shot_2017-05-26_at_3.37.36_PM_p1vk9n.png)

![screenshot](http://res.cloudinary.com/ac31624/image/upload/v1495838934/Screen_Shot_2017-05-26_at_3.48.31_PM_kavdgy.png)


### Back End Composition

The backend database consists of tables for users, listings, reviews, and bookings. Models of each also include the relative associations such as bookings belonging to both users and listings. This allows for efficient frontend processing by manipulating and display data through less backend calls.


## Future Features

Some features that are planned for inclusion include:

 * Better handling of logic for bookings. Bookings currently do not check for availability and will be incorporated into the backend handling. Bookings for different cities on same dates should prompt an alert for confirmation.
 * Review form will allow for more specific sections (optional) which will provide a richer detail page for that listing.
 * Listing results will be updated by moving boundaries of map
 * Improved user experience. Listings will include more photos and further detail. Profile pictures will be able to be uploaded. Users can place their own listings on site along with photos and details.
