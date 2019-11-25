import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['Mark', 'Lenon', 'Lukas', 'April', 'Tom', 'Junes', 'Julyu'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [9, 8, 2, 12, 5, 6, 1]
    }
  ]
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
        <h2> people </h2>
        <HorizontalBar data={data} width={400} height={400} />
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (PeoplePopular)
