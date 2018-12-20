import React, { PureComponent, Fragment }from 'react';
import { Col,  Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from './List.module.scss';
import axios from 'axios';
import { connect } from "react-redux";
import { getSingleList } from "../actions/getSingleListAction";

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
        <Col xs={6} sm={6} md={6} lg={4} className={styles.listing}>
          <Link to={`/listing/${detail.listingId}`} onClick={()=>this.listingClick(detail.listingId)}>
          <Image onClick={()=>this.listingClick(detail.listingId)} src={detail.images && detail.images[0].smallRetina}  className='img-responsive'></Image>
            <div>
              <p>{detail.streetName}, {detail.state}</p>
            </div>
          </Link>
        </Col>
      </Fragment>
    )
  }

  static propTypes = {
    detail: PropTypes.shape({
      listingId: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
      streetName: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      }).isRequired
  }
}



List.defaultProps = {
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
)(List);
