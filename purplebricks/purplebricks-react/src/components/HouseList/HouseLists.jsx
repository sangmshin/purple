import React, { PureComponent, Suspense, lazy, Fragment }from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPage } from "../../actions/getSearchPageAction";
import { backToSearchAction } from "../../actions/backToSearchAction";
import {  Row, Grid,  } from "react-bootstrap";
import { RiseLoader } from 'react-spinners';
// import List from './List';
import SearchBox from '../SearchBox/SearchBox';

const ListLazy = lazy(()=>import('./List'))

class HouseLists extends PureComponent{
  constructor(props){
    super(props)
    this.state = {loading: true}
  }

  componentDidMount(){
    !this.props.isBackToSearch && this.props._searchPage()
  }

  componentWillUnmount(){
    this.props._backToSearch()
  }

  render(){

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
              <Suspense key={list.listingId || list } fallback={
                <div className='spinner'>
                  <RiseLoader
                    sizeUnit={"px"}
                    size={10}
                    margin={'50px'}
                    color={'#582668'}
                    loading={this.state.loading}
                  />
                </div>
              }>
                <ListLazy detail={list}/>
              </Suspense>
            )
            : typeof data[0] === 'string'
            ? <h1 className='text-center'>{data[0]}</h1> : null
          }
          </Row>
        </Grid>
      </Fragment>
    )
  }

  static propTypes = {
    _searchPage: PropTypes.func.isRequired,
    _backToSearch: PropTypes.func.isRequired,
    data: PropTypes.array,
    isBackToSearch: PropTypes.bool,
  };

  static defaultProps = {
    _searchPage: e => {},
    _backToSearch: e => {},
  };
}




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
