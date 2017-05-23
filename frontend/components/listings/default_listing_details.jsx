import React from 'react';


const DefaultListingDetails = () => (
  <div className="default-listing">

    <div className="default-listing-details">
        <div className="detail-info-2-col">
          <div className="detail-category">Amenities</div>
          <div className="details">
            <ul>
              <li>Internet</li>
              <li>Wireless Internet</li>
              <li>Kitchen</li>
              <li>Free Parking</li>
            </ul>
          </div>
        </div>
    </div>

    <div className="default-listing-details">
        <div className="detail-info-2-col">
          <div className="detail-category">Prices</div>
          <div className="details">
            <ul>
              <li>Extra people: No Charge</li>
              <li>Cleaning Fee: $15</li>
              <li>Weekly Discount: 10%</li>
              <li>Monthly Discount: 20%</li>
            </ul>
          </div>
        </div>
    </div>

    <div>
      <div className="default-listing-details">
          <div className="detail-info-2-col">
            <div className="detail-category">House Rules</div>
            <div className="details">
              <ul>
                <li>No smoking</li>
                <li>Not suitable for pets</li>
                <li>No parties or events</li>
                <li>May not be safe or suitable for children (0-12 years)</li>
                <li>Check in time is flexible</li>
                <li>No eating meals in the bedroom</li>
                <li>If something gets broken it's expected to be fixed or replaced by the guest</li>
                <li>No smoking in the house</li>
                <li>Respect appropriate quiet times</li>
                <li>No unregistered guests allowed in the property</li>
              </ul>
          </div>
          </div>
      </div>
    </div>

  </div>
);

export default DefaultListingDetails;
