import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {HorizontalBar} from 'react-chartjs-2';
import {statisticsСollection} from "../../../../store/statistics/actions";

const data = {
  labels: [],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [2,3,4]
    }
  ]
};


class PeoplePopular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    if(!this.props.isOpen) {
      if (this.props.release.length === 0) {
        await this.props.statisticsСollection()
      }
      // const str = "";
      this.props.people.map((key,i)=>{
        // if (!data.datasets[0].data[i]===key.count){
        //   data.datasets[0].data.push(key.count);
        //   // str = + "," + key.title
        // }
//         else {
// //           data.labels.push(str);
//           // str = ""
//         }

        data.datasets[0].data.push(key.count);
        data.labels.push(key.title);
        return key
      });

    }
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div className="homePage">
          <h2> people </h2>
          <HorizontalBar data={data} width={600} height={600} ref="chart"/>
        </div>
      );
    }
    return (<div className="homePage"> </div>)
  }
}


const mapStateToProps = (store)=>{
  return store.Statistics
}


export default connect(mapStateToProps,{statisticsСollection}) (PeoplePopular)
