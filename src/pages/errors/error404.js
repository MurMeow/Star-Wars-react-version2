import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {Link} from "react-router-dom";


class Error404 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="error__block">
        <div className="error__container">
          <h2>Oops! Nothing was found</h2>
          <h1> 404 </h1>
          <p>We cont find the page you're looking for.</p>
          <Link to={""}>
            Go back home
          </Link>
        </div>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Error404)
