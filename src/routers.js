import React, {Fragment} from 'react';
import { Route, Switch } from "react-router-dom";
// import CommonLayout from './layout/commonLayout/commonLayout';
import Home from './pages/home/home'
import Authorization from './pages/authorization/authorization';
import Blog from './pages/blog/blog'
import Statistics from './pages/statistics/statistics'
import Facts from './pages/facts/facts'
import PeopleSW from './pages/people/peopleSW'
import PlanetsSW from './pages/planets/planetsSW'
import FilmsSW from './pages/films/filmsSW'
import statisticRelease from './pages/statistics/statisticsPages/release/release'
import statisticPeople from './pages/statistics/statisticsPages/people/peoplePopular'
import statisticPlanets from './pages/statistics/statisticsPages/planets/planetsPopular'
import statisticStarships from './pages/statistics/statisticsPages/starships/starshipsPopular'
import statisticSpecies from './pages/statistics/statisticsPages/species/speciesPopular'
import statisticVehicles from './pages/statistics/statisticsPages/vehicles/vehiclesPopular'
import Error404 from './pages/errors/error404'




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
        <Route exact path="/statistics/release/" component={statisticRelease} />
        <Route exact path="/statistics/people/" component={statisticPeople} />
        <Route exact path="/statistics/planets/" component={statisticPlanets} />
        <Route exact path="/statistics/starships/" component={statisticStarships} />
        <Route exact path="/statistics/species/" component={statisticSpecies} />
        <Route exact path="/error/404/" component={Error404} />
        <Route exact path="/statistics/vehicles/" component={statisticVehicles} />
        <Route exact path="" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default Router;