import React, { PureComponent, Fragment }from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getResults } from "../actions/getSearchResultsAction";
import { resetSearchPage } from "../actions/resetSearchPageAction";
// import { Col, Row, Grid } from "react-bootstrap";
// import "../styles.css";

class SearchBox extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      stateName: '',
    }
  }

  onChangeInput =(e)=>{
    this.setState({stateName: e.target.value})
  }

  onReset =()=> 
    this.setState({stateName: ''}, ()=>this.props._resetSearchPage())

  onSubmitForm =(e)=>{
    e.preventDefault()
    this.props._getResults(this.state.stateName)
    
  }

  render=()=>
    <Fragment>
      <div>
        <form action="" onSubmit={this.onSubmitForm}>
          <input type="text" name='state' value={this.state.stateName} onChange={this.onChangeInput}/>
          <input type="submit" value='UPDATE'/>
        </form>
        <button onClick={this.onReset}>RESET</button>
      </div>
    </Fragment>
}

SearchBox.propTypes = {
  _getResults: PropTypes.func.isRequired,
  _resetSearchPage: PropTypes.func.isRequired,
  data: PropTypes.array,
};

SearchBox.defaultProps = {
  _getResults: e => {},
  _resetSearchPage: e => {},
};

const mapStateToProps = state => ({
  data: state.data,
});

const mapActionsToProps = {
  _getResults: getResults,
  _resetSearchPage: resetSearchPage,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SearchBox);
