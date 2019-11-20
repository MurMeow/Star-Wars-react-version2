import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import './style.scss';
import { bindActionCreators } from 'redux'




class FlexibleHeader extends React.Component {


  render() {
    return (
      <div className="flexibleHeader">
        <div className="header__menu--container">
          <div className="header__menu--icon-hamburger"></div>
          <Link to={"/authorization/"}>
            <div  className="header__menu--icon-authorization"></div>
          </Link>
        </div>
        <Link to={""}>
          <div  className="header__menu--icon-logo"></div>
        </Link>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (FlexibleHeader)
