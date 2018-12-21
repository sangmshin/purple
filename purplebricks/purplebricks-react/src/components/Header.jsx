import React from 'react';
import '../static/pb-logo-light.svg'
import pb_logo from '../static/pb-logo-light.svg'
import {Grid, Row, Col, Image} from 'react-bootstrap';
import sty from './Header.module.scss';

const Header =()=>
  <Grid fluid>
    <Row>
      <Col className={sty.header__wrapper}>
        <Image src={pb_logo} className={sty.logo} width={200}/>
      </Col>
    </Row>
  </Grid>


export default Header;
