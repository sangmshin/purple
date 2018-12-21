import React, { PureComponent, Fragment }from 'react';
import { Col, Row, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import sty from './List.module.scss';
import { connect } from "react-redux";
import { getSingleList } from "../../actions/getSingleListAction";

class List extends PureComponent{
  constructor(props){
    super(props)
    this.state = {}
  }

  listingClick=(id)=>{
    this.props._getSingleList(id)
  }

  render(){
    const { detail } = this.props
    
    return (
      <Fragment>
        <Col xs={6} sm={6} md={6} lg={4} className={sty.listing}>
          <Link 
          to={`/listing/${detail.listingId}`} 
          onClick={()=>this.listingClick(detail.listingId)} 
          className={sty.list}
          >
          <div className={sty.list__wrapper}>
            <Image src={detail.images && detail.images[0].smallRetina}  className='img-responsive'></Image>
            <div className={sty.desc__wrapper}>
              <h3>${detail.listPrice.toLocaleString('en')}</h3>
              <h4>{detail.streetNumber} {detail.streetName} <br/>
                {detail.city}, {detail.state} {detail.postcode}
              </h4>
              <hr></hr>
              <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <p>{detail.bedroomsTotal} Beds</p>
                  <p>{detail.livingArea} Sq.ft</p>
                  <p>{detail.listingType}</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <p>{detail.bathroomsTotal} Beths</p>
                  <p>${(detail.listPrice/detail.livingArea).toFixed(2)}/sq.ft</p>
                </Col>
              </Row>
              <Row className={sty.cta}>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Button bsStyle='success'>BOOK SHOWING</Button>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Button >ADD TO TOUR LIST</Button>
                </Col>
              </Row>
            </div>
          </div>
          </Link>
        </Col>
      </Fragment>
    )
  }

  static propTypes = {

    detail: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
      listingId: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
      streetName: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      }).isRequired
    ])

  }
  
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
)(List);
