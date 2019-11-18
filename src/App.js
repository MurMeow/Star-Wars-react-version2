import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './layout/header';
import CommonLayout from './layout/commonLayout';
import Footer from './layout/footer';
import Authorization from './pages/authorization';
import InfoStarWars from './pages/infoStarWars';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/authorization/" component={Authorization} />
          <Route exact path="/info/" component={InfoStarWars} />
          <Route exact path="" component={CommonLayout} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
