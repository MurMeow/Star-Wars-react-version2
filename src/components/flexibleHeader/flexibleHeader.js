import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import './style.scss';
import { bindActionCreators } from 'redux'
import {outIn} from  '../../store/authorization/actions';



class FlexibleHeader extends React.Component {

  outIn = () => {
    this.props.outIn()
  };

  render() {
    return (
      <div className="flexibleHeader">
        <div className="header__menu--container">
          <div className="header__menu--icon-hamburger"></div>
          {this.props.Authorization.authorizationSuccessful?
            <div className="header__outIn--block">
              <div className="header__menu__nickname">{this.props.Authorization.personalInfo.nickname}</div>
              <Link to={"/authorization/"}>
                <div className="header__menu--icon-iGoOut" onClick={this.outIn}></div>
              </Link>
            </div>
            :
            <Link to={"/authorization/"}>
              <div  className="header__menu--icon-authorization"></div>
            </Link>
          }
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

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {outIn}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (FlexibleHeader)
