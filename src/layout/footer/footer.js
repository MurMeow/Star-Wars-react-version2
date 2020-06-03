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
					<a href="https://en.wikipedia.org/wiki/Star_Wars" target="_blank" rel="noopener noreferrer">
						Did you know that?
					</a>
        </div>
      </footer>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Footer)
