import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import  Nesting from '../components/nesting';

class Header extends React.Component {




  render() {


    return (
      <div>
        <Nesting />
        <Link to={""}> Home
        </Link>
        <Link to={"/info/"}> Info
        </Link>
        <Link to={"/authorization/"}> Authorization
        </Link>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Header)
