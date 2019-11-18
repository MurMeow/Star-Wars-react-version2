import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";

class InfoStarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Link to={"/people/"}> People
        </Link>
        <Link to={"/planets/"}> Planets
        </Link>
        <Link to={"/films/"}> Films
        </Link>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (InfoStarWars)
