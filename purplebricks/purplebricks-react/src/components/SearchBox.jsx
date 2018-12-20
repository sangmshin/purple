import React, { Component, Fragment }from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getResults } from "../actions/getSearchResultsAction";
import { resetSearchPage } from "../actions/resetSearchPageAction";
import { backToSearchAction } from "../actions/backToSearchAction";
// import { Col, Row, Grid } from "react-bootstrap";
// import "../styles.css";

class SearchBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      stateName: '',
      isDisabled: true,
    }
  }

  onChangeInput =(e)=>{
    this.setState({stateName: e.target.value}, 
    ()=>{
      this.state.stateName.trim().length > 0
      ? this.setState({isDisabled: false})
      : this.setState({isDisabled: true})
    })
    
  }

  onReset =()=> 
    this.setState({stateName: '', isDisabled: true}, 
      ()=> this.props._resetSearchPage()
    )

  onSubmitForm =(e)=>{
    console.log('submitted');
    
    e.preventDefault()
    this.props._getResults(this.state.stateName)
  }
  componentDidMount(){
    console.log('this.props.isBackToSearch----', this.props.isBackToSearch);
    
    this.props.isBackToSearch &&
    this.setState({stateName: this.props.data[this.props.data.length-1]})
  }

  componentDidUpdate(prevProps){
    console.log('from CDU: ', prevProps);
    
  }
  componentWillUnmount(){
    console.log('unmounted');
    
  }
  
  render(){
    console.log('SEARCHBOX: ', this.context)
    console.log('SEARCHBOX: ', this.props)

    return(
      <Fragment>
        <div>
          <form action="" onSubmit={this.onSubmitForm}>
            <input type="text" name='state' value={this.state.stateName} onChange={this.onChangeInput}/>
            <input type="submit" value='UPDATE' disabled={this.state.isDisabled}/>
          </form>
          <button onClick={()=>this.context.router.history.push('/')}>go back:history.push</button>
          <button onClick={this.context.router.history.goBack}>go back: history.goBack</button>
          <button onClick={this.onReset}>RESET</button>
        </div>
      </Fragment>
    )
  }

  static contextTypes = {
    router: PropTypes.object.isRequired, 
  }
}

SearchBox.propTypes = {
  _getResults: PropTypes.func.isRequired,
  _resetSearchPage: PropTypes.func.isRequired,
  data: PropTypes.array,
  isBackToSearch: PropTypes.bool,
};

SearchBox.defaultProps = {
  _getResults: e => {},
  _resetSearchPage: e => {},
};

const mapStateToProps = state => ({
  data: state.data,
  isBackToSearch: state.isBackToSearch,
});

const mapActionsToProps = {
  _getResults: getResults,
  _resetSearchPage: resetSearchPage,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SearchBox);
