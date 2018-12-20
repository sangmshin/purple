import { Col,  Image } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { Component, Fragment }from 'react';


class HeroImage extends Component{
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  render(){
    return (
      <Fragment>
        <Image src={this.props.imgsrc} className='img-responsive'/>
      </Fragment>
    )
  }
}


export default HeroImage;
