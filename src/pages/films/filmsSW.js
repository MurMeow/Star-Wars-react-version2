import React from 'react';
import {connect} from "react-redux";

class FilmsSW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        FilmsSW
      </div>
    );
  }
}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (FilmsSW)
