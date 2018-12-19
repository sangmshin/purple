import React, { PureComponent, Fragment }from 'react';
// import { Col, Row, Grid } from "react-bootstrap";
import PropTypes from "prop-types";


class List extends PureComponent{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const { detail } = this.props
    
    return (
      <Fragment>
        <div>
          <p>{detail.streetName}, {detail.state}</p>
        </div>
      </Fragment>
    )
  }

  static propTypes = {
    data: PropTypes.array,
  };
}

export default List;
