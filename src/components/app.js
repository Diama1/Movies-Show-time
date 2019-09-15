import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './sccs/app.scss';
import Header from './layouts/Header';
import Home from './pages/Home';
import TopPicks from './pages/TopPic';
import Horror from './pages/HorrorTvShows';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/horror" component={Horror} />
      <Route exact path="/topPick" component={TopPicks} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
export default App;
