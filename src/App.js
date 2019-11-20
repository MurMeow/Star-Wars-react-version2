import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
// import Routers from './routers';
import CommonLayout from "./layout/commonLayout/commonLayout";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CommonLayout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
