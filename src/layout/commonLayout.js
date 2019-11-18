import React from 'react';
import {connect} from "react-redux";


class CommonLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <p>home</p>
      </div>
    );
  }
}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (CommonLayout)
