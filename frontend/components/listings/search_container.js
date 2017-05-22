import { connect } from 'react-redux';
import SearchMap from './search';
import { updateBounds } from '../../actions/filter_actions';
import { listingsArray } from '../../reducers/selectors';
import { fetchAllListings } from '../../actions/listings_actions';

const mapStateToProps = (state) => ({
  allListings: listingsArray(state),

});

const mapDispatchToProps = (dispatch) => ({
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMap);
