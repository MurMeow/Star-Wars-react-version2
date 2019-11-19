import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class MenuSubgroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Fragment>
        <Link to={"/facts/people/"}> people
        </Link>
        <Link to={"/facts/planets/"}> planets
        </Link>
        <Link to={"/facts/films/"}> films
        </Link>
      </Fragment>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (MenuSubgroups)
