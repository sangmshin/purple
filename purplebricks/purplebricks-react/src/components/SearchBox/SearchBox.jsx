import React, { PureComponent, Fragment }from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getResults } from "../../actions/getSearchResultsAction";
import { resetSearchPage } from "../../actions/resetSearchPageAction";
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, HelpBlock } from "react-bootstrap";
import sty from './SearchBox.module.scss';


class SearchBox extends PureComponent{
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

  getValidationState() {
    const length = this.state.stateName.length;
    if (length === 2) return 'success';
    else if (length > 2) return 'error';
    // else if (length < 1) return 'error';
    return null;
  }

  onSubmitForm =(e)=>{
    e.preventDefault()
    this.props._getResults(this.state.stateName)
  }

  componentDidMount(){
    !this.props.isBackToSearch &&
    ReactDOM.findDOMNode(this.myinput).focus()

    let prevStateName = this.props.data[this.props.data.length-1]
    this.props.isBackToSearch && typeof prevStateName === 'string' 
    &&
    this.setState({stateName: prevStateName})
  }
  
  render(){
    console.log(this.props);
    
    const {stateName, isDisabled} = this.state

    return(
      <Fragment>
        <div className={sty.form__wrapper}>
          <form autoFocus={true} onSubmit={this.onSubmitForm}>
          <FormGroup controlId="formBasicText" validationState={this.getValidationState()} className={sty.form_content}>
            <FormControl ref={input=> this.myinput = input} type="text" name='state' value={stateName}
            placeholder="Search by State"
            onChange={this.onChangeInput} bsSize='lg' className={sty.inputfield}/>
            <FormControl.Feedback />
            <HelpBlock>State name must be two-letter. (e.g., CA)</HelpBlock>
            <Button bsStyle='primary' bsSize='lg' type='submit' disabled={isDisabled}>UPDATE</Button>
          </FormGroup>
          </form>
          <Button className={sty.resetBtn} bsSize='sm' onClick={this.onReset}>RESET</Button>
        </div>
      </Fragment>
    )
  }


  static propTypes = {
    _getResults: PropTypes.func.isRequired,
    _resetSearchPage: PropTypes.func.isRequired,
    data: PropTypes.array,
    isBackToSearch: PropTypes.bool,
  };

  static defaultProps = {
    _getResults: e => {},
    _resetSearchPage: e => {},
  };
}


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
