import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
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
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1977, 1983, 2004, 2006, 2007, 2010, 2019]
    }
  ]
};

class Release extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }






  render() {
    return (
      <div className="homePage">
        <h2>Release  </h2>
        <Line ref="chart" data={data}  width={400} height={400}/>
      </div>
    );
  }
  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}




const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Release)
