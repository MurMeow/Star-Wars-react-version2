import React from 'react';
import {connect} from "react-redux";
import './style.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <footer>
        <div className="rollIn">
          footer
        </div>
      </footer>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Footer)
