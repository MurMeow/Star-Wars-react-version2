import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import { bindActionCreators } from 'redux'





class Card extends React.Component  {


  render() {
    return (
   <div className="card__container">
       <div className="card">
         <div className="front">
           <div className={"films--episod--"+this.props.episode_id}></div>
         </div>

         <div className="back">
           <div className="content">
             {/*<p>{this.props.text}</p>*/}
             <h1>
               {this.props.title}
             </h1>
             <span>{this.props.release_date}</span>
             <span>{this.props.director}</span>
             <span>{this.props.producer}</span>
             <ul className="socials">
               <li>
                 <a href="https://www.youtube.com/watch?v=1h7JhROWG4o"
                    rel="noopener noreferrer"
                    target="_blank">
                   <i className="fa fa-youtube"></i>
                 </a>
                 <a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B"
                    rel="noopener noreferrer"
                    target="_blank">
                   <i className="fa fa-wikipedia-w"></i>
                 </a>
                 {/*<a href="https://github.com/MurMeow/Star-Wars-react-version2">*/}
                   {/*<i className="fa fa-instagram"></i>*/}
                 {/*</a>*/}
                 {/*<a href="https://github.com/MurMeow/Star-Wars-react-version2">*/}
                   {/*<i className="fa fa-twitter"></i>*/}
                 {/*</a>*/}
                 {/*<a href="https://github.com/MurMeow/Star-Wars-react-version2">*/}
                   {/*<i className="fa fa-vk"></i>*/}
                 {/*</a>*/}
                 {/*<a href="https://github.com/MurMeow/Star-Wars-react-version2">*/}
                   {/*<i className="fa fa-github"></i>*/}
                 {/*</a>*/}
               </li>
             </ul>
           </div>
         </div>

       </div>
   </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store.Films
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (Card)
