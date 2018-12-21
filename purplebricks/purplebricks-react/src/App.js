import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import HouseLists from './components/HouseList/HouseLists';
import SingleList from './components/SingleList/SingleList';
import Header from './components/SearchBox/Header';

const App =()=>
  <Router>
    <Fragment>
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={HouseLists} />
        <Route path='/listing/:id' component={SingleList} />
      </Switch> 
    </Fragment>
  </Router>


export default App;
