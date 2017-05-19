import React from 'react';
import { Route } from 'react-router-dom';

class ListingsDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchOneListing(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchOneListing(this.props.match.params.id);
    }
  }

  render() {
    return (
      <h1>{this.props.listing.title}</h1>
    );
  }
}

export default ListingsDetail;
