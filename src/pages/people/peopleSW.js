import React from 'react';
import {connect} from "react-redux";


class PeopleSW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			list: false
    };
  }
  list = null

	 componentDidUpdate() {
		 setTimeout(()=>{ this.list = this.props.receivedData.fetchResults.people.results.map((item)=>{
			 this.setState({list:true})
			 return <p key={item.name}>{item.name}</p>
			})
		},2000)
	}



	 render() {
    return (
      <div>
				<h3>Name:</h3>
				{this.state.list?this.list:<div></div>}

      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (PeopleSW)
