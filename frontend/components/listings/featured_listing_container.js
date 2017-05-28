import { connect } from 'react-redux';
import FeaturedListing from './featured_listing';
import { fetchAllListings } from '../../actions/listings_actions';
import { listingsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  allListings: listingsArray(state) || []
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllListings: () => dispatch(fetchAllListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedListing);
