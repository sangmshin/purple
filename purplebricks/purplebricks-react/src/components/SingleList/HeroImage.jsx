import {  Image } from "react-bootstrap";
import PropTypes from "prop-types";
import React, {  Fragment }from 'react';

const HeroImage =({imgsrc})=>
  <Fragment>
    <Image src={imgsrc} className='img-responsive'/>
  </Fragment>


HeroImage.propTypes={
  imgsrc: PropTypes.string
}


export default HeroImage;
