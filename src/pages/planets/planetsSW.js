import React from 'react';
import {connect} from "react-redux";

class PlanetsSW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        PlanetsSW
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (PlanetsSW)
