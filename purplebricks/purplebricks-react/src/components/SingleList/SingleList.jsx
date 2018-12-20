import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSingleList } from "../../actions/getSingleListAction";
import { Col, Row, Grid, Image } from "react-bootstrap";
import HeroImage from './HeroImage';


class SingleList extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.props.singleData.images &&
    console.log(this.props.singleData.images.length);
  }

  render(){
    console.log('Single List: ', this.props.singleData.images);
    const { singleData } = this.props
    
    return singleData &&  
      <Fragment>
        <div>
          <HeroImage imgsrc={singleData.images && singleData.images[0].desktopFullSizeRetina}/>
          <p>Listing Id: {singleData.listingId}</p>
          <p>Description: {singleData.description}</p>
          <p>Year Built: {singleData.yearBuilt}</p>
          <p>Street Name: {singleData.streetName}</p>
          <p>Listing Status: {singleData.listingStatus}</p>
        </div>
      </Fragment>
  }

  static propTypes = {
    _getSingleList: PropTypes.func.isRequired,
    singleData: PropTypes.object.isRequired,
  };
}


SingleList.defaultProps = {
  _getSingleList: e => {},
};

const mapStateToProps = state => ({
  singleData: state.singleData,
});

const mapActionsToProps = {
  _getSingleList: getSingleList,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SingleList);
