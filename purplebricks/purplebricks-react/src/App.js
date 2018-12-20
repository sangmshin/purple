import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
// import SearchBox from './components/SearchBox';
import HouseLists from './components/HouseLists';
import SingleList from './components/SingleList/SingleList';


const App =()=>
  <Router>
    <Fragment>
      {/* <SearchBox/> */}
      <Switch>
        <Route exact={true} path='/' component={HouseLists} />
        <Route path='/listing/:id' component={SingleList} />
      </Switch> 
    </Fragment>
  </Router>


export default App;
