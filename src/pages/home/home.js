import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {Link} from 'react-router-dom';
// import ExperementHeader from '../../components/experimentHeaderFlex/ExperementHeader';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="homePage">
        <h2> welcome </h2>
        <h3> to us </h3>
				<h2> {this.props.Authorization.personalInfo.nickname} </h2>
				<h3>May the force be with you.</h3>
				<p> It was a long time ago, in a galaxy far, far away...</p>
       {/* <Link to={"/error/404/"}>*/}
       {/*<div>Error404</div>*/}
       {/* </Link>*/}
       {/* <ExperementHeader/>*/}
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Home)
