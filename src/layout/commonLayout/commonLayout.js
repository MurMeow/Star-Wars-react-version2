import React from 'react';
import {connect} from "react-redux";
import Home from '../../pages/home/home'


class CommonLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <main>
        <Home />
      </main>
    );
  }
}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (CommonLayout)
