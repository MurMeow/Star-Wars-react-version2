import React from 'react';
import {connect} from "react-redux";
import './style.scss';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="homePage">
        <p> {this.props.Authorization.personalInfo.nickname} </p>
        <h2> welcome </h2>
        <h3> to us </h3>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Home)
