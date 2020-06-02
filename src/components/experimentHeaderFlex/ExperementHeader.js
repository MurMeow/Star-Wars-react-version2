// import React from 'react';
// import { Link } from "react-router-dom";
// import {connect} from "react-redux";
// import './style.scss';
// import { bindActionCreators } from 'redux'
// import {outIn} from  '../../store/authorization/actions';
//
//
//
// class ExperementHeader extends React.Component {
//
//
//   render() {
//     return (
//       <div className="flexibleHeader">
//         <div className="header">
//           <h2>starWars</h2>
//           <input className="switcher" type="checkbox"/>
//           <label className="open" htmlFor="menu">
//             <i className="fa fa-bars"></i>
//           </label>
//           <nav>
//             <ul>
//               <li><a href="">Home</a></li>
//               <li><a href="/facts/films/">Facts</a></li>
//               <li><a href="/blog/">Blog</a></li>
//               <li><a href="/statistics/">Statistics</a></li>
//             </ul>
//             <label className="close" htmlFor="menu">
//               <i className="fa fa-times"></i>
//             </label>
//           </nav>
//         </div>
//
//       </div>
//     );
//   }
//
// }
//
//
// const mapStateToProps = (store)=>{
//   return store
// };
//
// const mapDispatchToProps = (dispatch) => bindActionCreators(
//   {outIn}, dispatch);
//
//
// export default connect(mapStateToProps, mapDispatchToProps) (ExperementHeader)
