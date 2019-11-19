import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import  Nesting from '../../components/nesting';
import  MenuSubgroups from '../../components/menuSubgroups/menuSubgroups';
class Header extends React.Component {




  render() {


    return (
      <header>
        <Nesting />
        <Link to={""}> Home
        </Link>
        <Link to={"/facts/"}> Facts
        </Link>
        <Link to={"/blog/"}> Blog
        </Link>
        <Link to={"/statistics/"}> Statistics
        </Link>
        <Link to={"/authorization/"}> Authorization
        </Link>
      <MenuSubgroups />
      </header>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Header)
