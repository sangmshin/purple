import React, { Component,  Fragment }from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPage } from "../actions/getSearchPageAction";
import List from './List';

class HouseLists extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.props._searchPage()
  }

  render(){

    console.log('HouseLists', this.props.data);
    
    const {data} = this.props

    return (
      <Fragment>
        {
          data && data.map( list => (
            <List key={list.listingId} detail={list}/>
          ))
        }
      </Fragment>
    )
  }
}


HouseLists.propTypes = {
  _searchPage: PropTypes.func.isRequired,
  data: PropTypes.array,
};

HouseLists.defaultProps = {
  _searchPage: e => {},
};

const mapStateToProps = state => ({
  data: state.data,
});

const mapActionsToProps = {
  _searchPage: searchPage,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HouseLists);
