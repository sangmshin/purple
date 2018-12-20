import React, { Component,  Fragment }from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPage } from "../actions/getSearchPageAction";
import { backToSearchAction } from "../actions/backToSearchAction";
import {  Row, Grid,  } from "react-bootstrap";
import List from './List';
import SearchBox from './SearchBox';

class HouseLists extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    !this.props.isBackToSearch && this.props._searchPage()
  }

  componentWillUnmount(){
    console.log('HOUSELISTS : unmounted');
    this.props._backToSearch()
  }

  render(){

    console.log('HouseLists', this.props.data[this.props.data.length-1]);
    
    const {data} = this.props

    return (
      <Fragment>
        <Grid fluid>
        <SearchBox/>
          <Row>
          {
            data && typeof data[0] === 'object' 
            ? data.map( list => 
              list.listingId &&
              <List key={list.listingId || list } detail={list}/>
            )
            : typeof data[0] === 'string'
            ? <h1 className='text-center'>{data[0]}</h1> : null
          }
          </Row>
        </Grid>
      </Fragment>
    )
  }
}


HouseLists.propTypes = {
  _searchPage: PropTypes.func.isRequired,
  _backToSearch: PropTypes.func.isRequired,
  data: PropTypes.array,
  isBackToSearch: PropTypes.bool,
};

HouseLists.defaultProps = {
  _searchPage: e => {},
  _backToSearch: e => {},
};

const mapStateToProps = state => ({
  data: state.data,
  isBackToSearch: state.isBackToSearch,
});

const mapActionsToProps = {
  _searchPage: searchPage,
  _backToSearch: backToSearchAction
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HouseLists);
