import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Mars',
    'Venera',
    'Upiter'
  ],
  datasets: [{
    data: [1, 2, 3],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class PeoplePopular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="homePage">
        <h2> planets </h2>
        <Doughnut data={data} width={`39%`} height={`45%`} style={{display: 'block', margin: '0 auto'}}/>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (PeoplePopular)