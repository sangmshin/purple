import React, {PureComponent} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {sty} from './ErrorBoundary.module.scss';


class ErrorBoundary extends PureComponent{
    constructor(props){
      super(props)
      this.state = {
        hasError : false
      }
    }

    componentDidCatch(error, info){
      this.setState({hasError: true})
      console.log('Error Boundary:', error, info);
    }

    render(){
      return this.state.hasError 
      ? <Grid>
          <Row className={sty.eb__wrapper}>
            <Col xs={10} sm={10} md={8} lg={6} className='text-center'>
              <h4 className={sty.error_boundary}>
                Something went terribly wrong, but no need to panic. Just go back to your IDE and search for bugs. If the problem persists, go to google.com and google your bugs in a rapid manner.
              </h4>
            </Col>
          </Row> 
        </Grid> 
      : this.props.children
    }
  }

export default ErrorBoundary;
