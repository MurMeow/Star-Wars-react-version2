import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import './style.scss';


class MenuSubgroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <ul className="menuSubgroups flex">
        <li>
          <Link to={"/facts/people/"}> people </Link>
        </li>
        <li>
          <Link to={"/facts/planets/"}> planets </Link>
        </li>
        <li>
          <Link to={"/facts/films/"}> films </Link>
        </li>
      </ul>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (MenuSubgroups)
