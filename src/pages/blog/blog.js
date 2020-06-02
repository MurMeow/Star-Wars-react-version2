import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {openThemes} from '../../store/blog/actions'


class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    openThemes = () => {
      this.props.openThemes()
    };

  render() {
    return (
      <div className="blog">
        <h2>Blog</h2>
        <div>
          {this.props.Blog.themes.map((key,i)=>{
            return(
              <div className="title__block" key={i}>
                <div className="flex title">
                  <p className="theme--title">{key.title}</p>
                  <button onClick={this.openThemes}>read</button>
                </div>
                  {/*{key.isOpen==="true"?console.log(key.isOpen + "-true"):console.log(key.isOpen + "- false")}*/}
                  {key.isOpen==="true"?key.comments.map((item,i)=>{
                      return(
                          <div className="comment--block" key={i}>
                              <div className="blog__comment__text">{item.text}</div>
                              <div className="blog__comment__author">{item.author}</div>
                          </div>
                      )
                  }):console.log(key.isOpen + " - false")}
                {/*{key.comments.map((item,i)=>{*/}
                {/*        return(*/}
                {/*            <div className="comment--block" key={i}>*/}
                {/*                <div className="blog__comment__text">{item.text}</div>*/}
                {/*                <div className="blog__comment__author">{item.author}</div>*/}
                {/*            </div>*/}
                {/*        )*/}

                {/*})*/}
                {/*}*/}

            </div>
            )}
            )}
        </div>
        <button>Hew theme</button>
      </div>
    );
  }

}


const mapStateToProps = (store) => {
  return store
};


export default connect(mapStateToProps, {openThemes}) (Blog)
