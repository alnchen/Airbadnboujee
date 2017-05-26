import { connect } from 'react-redux';
import HomePage from './home';
import { fetchAllListings } from '../../actions/listings_actions';
import { listingsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  allListings: listingsArray(state) || []
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllListings: () => dispatch(fetchAllListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
