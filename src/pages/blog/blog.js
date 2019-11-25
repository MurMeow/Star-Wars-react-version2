import React from 'react';
import {connect} from "react-redux";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <h2>Blog</h2>
        <div>
          {this.props.Blog.themes.map((key,i)=>{
            return(
              <div key={i}>
                <div className="flex">
                  <p className="theme--title">{key.title}</p>
                  <button>read</button>
                </div>

                {key.comments.map((item,i)=>{
                  return(
                    <div key={i}>
                      <div>{item.text}</div>
                      <div>{item.author}</div>
                    </div>
                  )
                })
                }

            </div>
            )}
            )}
        </div>
        <button>Hew theme</button>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Blog)
