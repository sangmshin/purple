import React, { Component, Suspense, lazy  } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSingleList } from "../../actions/getSingleListAction";
import { Col, Row, Grid,  Button } from "react-bootstrap";
import sty from './SingleList.module.scss';
import { RiseLoader } from 'react-spinners';

const HeaderImg = lazy(()=> import ('./HeroImage'))

class SingleList extends Component{
  constructor(props){
    super(props)
    this.state = {loading: true}
  }

  render(){
    const { singleData } = this.props
    
    return singleData &&  
      <Grid>
        <Row>
        <h4 onClick={()=>this.context.router.history.push('/')} className={sty.backBtn}> &#8678; BACK TO SEARCH RESULTS</h4>
        <div className={sty.single}>
          <div className={sty.hero__wrapper}>
            <Suspense fallback={
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
              <HeaderImg className={sty.hero_img} imgsrc={singleData.images && singleData.images[0].desktopFullSizeRetina}/>
            </Suspense>
            <p className={sty.status}>Listing Status: {singleData.listingStatus}</p>
          </div>
          <div className={sty.textContent}>

            <h1 className={sty.price}>${singleData.listPrice && singleData.listPrice.toLocaleString('en')}</h1>
            <h3>{singleData.streetNumber} {singleData.streetName} {singleData.city}, {singleData.state} {singleData.postcode}</h3>
            <Row>
              <Col xs={6} sm={3} md={3} lg={3}>
                <h3>{singleData.bedroomsTotal}</h3>
                <h4>Beds</h4>
              </Col>
              <Col xs={6} sm={3} md={3} lg={3}>
              <h3>{singleData.bathroomsTotal}</h3>
              <h4>Beths</h4>
              </Col>
              <Col xs={6} sm={3} md={3} lg={3}>
                <h3>{singleData.livingArea}</h3>
                <h4>Sq.ft</h4>
              </Col>
              <Col xs={6} sm={3} md={3} lg={3}>
                <h3>${singleData.listPrice && (singleData.listPrice/singleData.livingArea).toFixed(2)}</h3>
                <h4>/sq.ft</h4>
              </Col>
            </Row>

            <Button bsStyle='success' bsSize='lg' className={sty.bookBtn}>BOOK SHOWING</Button>

            <div className={sty.desc}>
              <h1>Property Description</h1>
              <hr/>
              <p className={sty.desc_text}>{singleData.description}</p>
            </div>    

            <div className={sty.features}>
              <h1>Features</h1>
              <hr/>
              <p>Property Type: {singleData.listingType} </p>
              <p>County: {singleData.state} </p>
              <p>Year Built: {singleData.yearBuilt} </p>
            </div>  

          </div>
        </div>
        </Row>
      </Grid>
  }

  static contextTypes = {
    router: PropTypes.object.isRequired, 
  }

  static propTypes = {
    _getSingleList: PropTypes.func.isRequired,
    singleData: PropTypes.object.isRequired,
  };
  
  static defaultProps = {
    _getSingleList: e => {},
  };
}



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
