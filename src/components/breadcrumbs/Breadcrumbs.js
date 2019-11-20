import React ,{Component ,Fragment} from "react";
import connect from "react-redux/es/connect/connect";
import '../style.scss'





 class Breadcrumbs extends Component {
   constructor(props) {
     super(props);
     this.state = {
       path: window.location.pathname
     };
   }



  render(){
    console.log(this.state)
    return (
      <Fragment>
        <input  defaultValue={this.state.path}></input>
      </Fragment>
    )
  }

}

const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Breadcrumbs)
