import React from 'react';
import {connect} from 'react-redux';
import MyCloud from '../cloud';
import {statisticsСollection} from '../../store/statistics/actions';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  async componentDidMount(){


    this.props.statisticsСollection()

  }

  render() {
    return (
      <div>
        <MyCloud />
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
};


export default connect(mapStateToProps,{statisticsСollection}) (Statistics)
