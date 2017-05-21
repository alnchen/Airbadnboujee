import React from 'react';


const DefaultListingDetails = () => (
  <div>

    <div className="default-listing-details">
        <div className="detail-info-2-col">
          <div className="detail-category">Amenities</div>
          <div className="split">
            <div>Internet <br/> Wireless Internet</div>
            <div>Kitchen <br/> Free Parking</div>
          </div>
        </div>
    </div>

    <div className="default-listing-details">
        <div className="detail-info-2-col">
          <div className="detail-category">Prices</div>
          <div className="split">
            <div>Extra people: No Charge <br/> Cleaning Fee: $15</div>
            <div>Weekly Discount: 10%<br/>Monthly Discount: 20%<br/></div>
          </div>
        </div>
    </div>

    <div>
      <div className="default-listing-details">
          <div className="detail-info-1-col">
            <div className="detail-category">House Rules</div>
              <div>No smoking<br/>Not suitable for pets<br/>No parties or events<br/>
                May not be safe or suitable for children (0-12 years)<br/>Check in time is flexible<br/>
                No eating meals in the bedroom please.<br/>If something gets broken it's expected to be fixed or replaced by the guest.<br/>
              No smoking in the house.<br/>Respect appropriate quiet times.<br/>No unregistered guests allowed in the property.<br/>
              </div>
          </div>
      </div>
    </div>

  </div>
);

export default DefaultListingDetails;
