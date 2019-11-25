import React from 'react';
import {connect} from "react-redux";
import './style.scss';
// import auhorization from '../../store/authorization/actions'

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
        <form>
          <input type="text" placeholder="nickname"/>
          <input type="email" placeholder="email"/>
          <button >enter</button>
        </form>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Authorization)
