import React from 'react';
import {connect} from "react-redux";
import './style.scss';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="authorizationBloc">
        <h2>Authorization</h2>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Authorization)
