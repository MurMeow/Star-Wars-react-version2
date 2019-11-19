import React, {Fragment} from 'react';
import { Route, Switch } from "react-router-dom";
import CommonLayout from './layout/commonLayout/commonLayout';
import Authorization from './pages/authorization/authorization';
import Blog from './pages/blog/blog'
import Statistics from './pages/statistics/statistics'
import Facts from './pages/facts/facts'
import PeopleSW from './pages/people/peopleSW'
import PlanetsSW from './pages/planets/planetsSW'
import FilmsSW from './pages/films/filmsSW'




function Router() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/authorization/" component={Authorization} />
        <Route exact path="/statistics/" component={Statistics} />
        <Route exact path="/blog/" component={Blog} />
        <Route exact path="/facts/" component={Facts} />
        <Route exact path="/facts/people/" component={PeopleSW} />
        <Route exact path="/facts/planets/" component={PlanetsSW} />
        <Route exact path="/facts/films/" component={FilmsSW} />
        <Route exact path="" component={CommonLayout} />
      </Switch>
    </Fragment>
  );
}

export default Router;