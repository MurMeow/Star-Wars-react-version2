import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {Line} from 'react-chartjs-2';
import {statisticsСollection} from '../../../../store/statistics/actions';
import {sortFunction} from '../../../../helper';

const data = {
  labels: [],
  datasets: [
    {
      label: 'Year release',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 80,
      data: []

    }
  ]
};



class Release extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

  }


  async componentDidMount() {
    if(!this.props.isOpen){
      if(this.props.release.length===0){
        await this.props.statisticsСollection()
      }

      const dataRelease = this.props.release;
      dataRelease.map((key)=>{
        let dateRelease = new Date(key.release_date);
        let yearRelease = dateRelease.getFullYear();
        return key.release_date = yearRelease;
      });

      sortFunction(dataRelease,"release_date")

      dataRelease.map((key)=>{
        data.datasets[0].data.push(key.release_date);
        data.labels.push(key.episode_id + key.title);
        return key
      });

      return (
        this.setState({
          isOpen:true
        })
      ) ;
    }
  }

  render() {
    if(this.props.isOpen){
      return (
        <div className="homePage">
          <h2>Release  </h2>
          <Line ref="chart" data={data}  width={600} height={600} />
        </div>

      );
    }
    return (<div className="homePage"> </div>)
  }

}




const mapStateToProps = (store)=>{
  return store.Statistics
}

// const mapStateToProps = (store)=> {
//   return {
//     loading: store.Statistics.loading,
//     error: store.Statistics.error,
//     data: sort(store.Statistics.data),
//   }
// }
//
//
// const sort = (array) => {
//   return array.sort()
// }


export default connect(mapStateToProps,{statisticsСollection}) (Release)
