import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import Routers from '../../routers';
import FlexibleMenu from '../../components/flexibleMenu/flexibleMenu';


class CommonLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <main className="main__container flex">
        <div className="main--menu__container">
          <FlexibleMenu />
        </div>
        <div className="main--content__container zoomIn">
          <Routers />
        </div>

      </main>
    );
  }
}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (CommonLayout)
