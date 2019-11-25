import React from 'react';
import {connect} from 'react-redux';
import MyCloud from '../experement';
import {statisticsСollection} from '../../store/statistics/actions';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount(){
    const url = 'https://swapi.co/api/films/';
    const result = await fetch(url);
    const informationReceived = await result.json();
    console.log(informationReceived)

    // informationReceived.results.map((kay)=>{
      // this.props.Statistics.release.name: kay.title
      //  console.log(kay.title)
      // }
    // )
    statisticsСollection(informationReceived)
  }

  render() {
    return (
      <div>
        statistics
        <MyCloud />
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
};


export default connect(mapStateToProps) (Statistics)
