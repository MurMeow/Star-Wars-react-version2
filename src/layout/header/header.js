import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import './style.scss';
import  MenuSubgroups from '../../components/menuSubgroups/menuSubgroups';
import FlexibleHeader from '../../components/flexibleHeader/flexibleHeader';
// import { bindActionCreators } from 'redux';
import {outIn} from  '../../store/authorization/actions';
import {isOpenFacts} from '../../store/facts/actions';


class Header extends React.Component {


  outIn = () => {
    this.props.outIn()
  };
  isOpenFacts = () =>{
    this.props.isOpenFacts()
  }


  render() {
    console.log(this.props)
    return (
      <header>
        <div className="header">
          <div className="menuMain">
            <Link to={""}>
              <div  className="header__menu--icon-logo"></div>
            </Link>
            <ul className="menu flex">
              <li>
                <Link to={""}> Home </Link>
              </li>
              <li>
                <Link to={"/facts/films/"} onClick={this.isOpenFacts}> Facts
                  <div className="main--Menu--arrow"></div>
                </Link>
              </li>
              <li>
                <Link to={"/blog/"}> Blog </Link>
              </li>
              <li>
                <Link to={"/statistics/"}> Statistics </Link>
              </li>
            </ul>
            {this.props.Authorization.authorizationSuccessful?
                <div className="header__outIn--block">
                  <Link to={"/authorization/"}>
                   <div className="header__menu--icon-iGoOut" onClick={this.outIn}></div>
                  </Link>
                  <div className="header__menu__nickname">{this.props.Authorization.personalInfo.nickname}</div>
                </div>
              :
              <Link to={"/authorization/"}>
                <div  className="header__menu--icon-authorization"></div>
              </Link>
            }


          </div>
          <MenuSubgroups />
        </div>

        <FlexibleHeader/>
      </header>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
};

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   isOpenFacts
// }, dispatch);


export default connect(mapStateToProps, {outIn,isOpenFacts}) (Header)
