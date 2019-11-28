import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {checkAuthorization} from '../../store/authorization/actions'

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
    };
  }

  handleInputChangeNickname = ({ target: { value } }) => {
    this.setState({
      nickname: value
    })
  };

  handleInputChangeEmail = ({ target: { value } }) => {
    this.setState({
      email: value
    })
  };

  rememberPassword = ({ target: { value } }) => {
    if(this.state.nickname!==''){
      const nickname = this.state.nickname;
      localStorage.setItem(nickname, value)
    }else {
      alert("Введите nickname")
    }

  };
  registrationUser = () => {
    console.log(localStorage)
    const {counterUsers} = this.props
    const userId = counterUsers +1;
    const NewCounterUsers = userId;
    this.props.checkAuthorization(this.state.nickname, this.state.email, userId, NewCounterUsers );
    this.setState({
      nickname: '',
      email: '',
    })
  };

  checkUser = (username, password) => {
    // if (localStorage.getItem(username) === password) {
    //   const {counterUsers} = this.props
    //   const userId = counterUsers +1;
    //   const NewCounterUsers = userId;
    //   this.props.checkAuthorization(this.state.nickname, this.state.email, userId, NewCounterUsers );
    //   this.setState({
    //     nickname: '',
    //     email: '',
    //   })
    // } else {
    //   alert('Такой пользователь не зарегистрирован');
    // }

  }

  render() {
    return (
      <div className="authorizationBloc">
        <h2>Authorization</h2>
        <form>
          <input type="text" placeholder="nickname"
                 onChange={this.handleInputChangeNickname}
                 value={this.state.nickname}
                 maxLength="10" />
          <input type="email" placeholder="email"
                 onChange={this.handleInputChangeEmail}
                 value={this.state.email}/>
          <input type="password" placeholder="password"
                 onChange={this.rememberPassword}
                 maxLength="15"/>
          <input type="button"
                 onClick={this.registrationUser}
                 value="registration"
                 className="button"/>
          <input type="button"
                 onClick={this.checkUser}
                 value="enter"
                 className="button"/>
        </form>
      </div>
    );
  }
}


const mapStateToProps = store=> (
  store.Authorization
);

export default connect(mapStateToProps, {checkAuthorization}) (Authorization)
