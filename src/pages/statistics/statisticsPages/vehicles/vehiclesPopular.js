import React from 'react';
import {connect} from "react-redux";
import './style.scss';
const Chart = require("chart.js");




class VehiclesPopular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const node = this.node;

    const myChart = new Chart(node, {
      type: "line",
      data: {
        labels: ["1977", "1983", "2004", "2006", "2007", "2010", "2019"],
        datasets: [
          {
            label: "# release",
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="homePage">
        <h2> VehiclesPopular </h2>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (VehiclesPopular)


