import { connect } from 'react-redux';
// import ListingsIndex from './listings_index';
import { fetchAllListings } from '../../actions/listings_actions';
import { listingsArray } from '../../reducers/selectors';
import SearchBar from './search_bar';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllListings: (filters) => dispatch(fetchAllListings(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
