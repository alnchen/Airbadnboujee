import { connect } from 'react-redux';
import ListingsDetail from './listings_detail';
import { fetchOneListing } from '../../actions/listings_actions';

const mapStateToProps = (state) => ({
  listing: state.listing
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneListing: id => dispatch(fetchOneListing(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsDetail);
