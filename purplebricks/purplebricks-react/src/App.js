import React, { Component, Fragment } from 'react';
import SearchBox from './components/SearchBox';
import HouseLists from './components/HouseLists';
import './App.css';


class App extends Component {
  render=()=> 
    <Fragment>
      <SearchBox/>
      <HouseLists/>
    </Fragment>
}

export default App;
