import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import { bindActionCreators } from 'redux'
import {Link} from "react-router-dom";
import {isOpenFacts} from "../../store/facts/actions";




class FlexibleMenu extends React.Component {


  render() {
    return (
   <div className="main--flexibleMenu__container">
     <ul className="menu flex">
       <li>
         <Link to={""}> Home </Link>
       </li>
       <li className="main--flexibleMenu--composite">
         <Link to={"/facts/"} onClick={isOpenFacts} > Facts
           <div className="main--flexibleMenu--arrow"></div>
         </Link>
       </li>
       <li className="main--flexibleMenu__subgroup">
         <ul>
           <li>
             <Link to={"/facts/people/"}> people </Link>
           </li>
           <li>
             <Link to={"/facts/planets/"}> planets </Link>
           </li>
           <li>
             <Link to={"/facts/films/"}> films </Link>
           </li>
         </ul>
       </li>
       <li>
         <Link to={"/blog/"}> Blog </Link>
       </li>
       <li>
         <Link to={"/statistics/"}> Statistics </Link>
       </li>
     </ul>
   </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (FlexibleMenu)
