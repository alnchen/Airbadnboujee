import { connect } from 'react-redux';
import ListingsDetail from './listings_detail';
import { addListing } from '../../actions/listings_actions';

const mapStateToProps = (state) => ({
  errors: state.listing.errors
});

const mapDispatchToProps = (dispatch) => ({
  addListing: listing => dispatch(addListing(listing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsDetail);
