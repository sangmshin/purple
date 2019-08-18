import React, { Fragment } from 'react';
import { HashRouter, Route,  Switch } from 'react-router-dom';
import HouseLists from './components/HouseList/HouseLists';
import SingleList from './components/SingleList/SingleList';
import Header from './components/SearchBox/Header';

const App =()=>
  <HashRouter>
    <Fragment>
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={HouseLists} />
        <Route path='/listing/:id' component={SingleList} />
      </Switch> 
    </Fragment>
  </HashRouter>


export default App;
