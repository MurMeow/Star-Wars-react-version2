import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import Card from '../../components/card/card';
import {fetchFilms} from '../../store/facts/films/actions';

class FilmsSW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

async componentDidMount() {
    if(this.props.count===0){
      this.props.fetchFilms();
    }
}

  render() {

    return (
      <div className="filmsSW flex">
        {this.props.films.map((key, i) => {
          return(
            <Card key={i}
                  title={key.title}
                  episode_id={key.episode_id}
                  director={key.director}
                  producer={key.producer}
                  release_date={key.release_date}
            />
          )
        })
        }
      </div>
    );
  }
}


const mapStateToProps = (store)=>{
  return store.Films
}


export default connect(mapStateToProps,{fetchFilms}) (FilmsSW)
