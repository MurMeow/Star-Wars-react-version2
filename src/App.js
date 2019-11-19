import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Router from './routers';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
