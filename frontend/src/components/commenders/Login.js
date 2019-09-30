import React, { Component } from 'react';
import LoginPage from '../pages/LoginPage';
import Axios from 'axios';
import '../../css/pages/Login.css';
import {Animated} from "react-animated-css";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      userId : '',
      userPass : '',
      islogin : true
    }
  }


  idChange = (e) => {
      this.setState({
          userId: e.target.value
      })
  }
  passChange = (e) => {
      
      this.setState({
          userPass:e.target.value
      })
  }


  handleSubmit = () => {
      var inputId = this.state.userId;
      var inputPw = this.state.userPass;
      console.log('inputId -> ', inputId);
      console.log('inputPw -> ', inputPw);

      this.handleCreate();

  }


  handleCreate = () => {
    console.log('call handleCreate');
    var self = this;
    Axios.get('/loginTest', {
        params : {
            userId : this.state.userId,
            userPass : this.state.userPass
        }
    })
      .then(function (response) {
          console.log(response);


          if(response.data.returnCode === 200) {

            this.props.loginChange()
            console.log('in200')
          } else {
            alert("로그인 실패");

            self.setState({
              islogin : false
            })
          }
      })
      .catch(function(error) {
      })

  }

  testPost = () => {
    console.log('call PostTest');
    Axios.post('/getPost', {
        params : {
            data : "hello"
        }
    })
      .then(function (response) {
          console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })

  }



  render() {
    return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div className='xxx'>
        <LoginPage
          onCreate={this.handleCreate}
          idChange={this.idChange}
          passChange={this.passChange}
          handleSubmit={this.handleSubmit}
          islogin={this.state.islogin}
          postTest={this.testPost}
        />
        <div className='debug-box'>
            <h5>State DEBUG</h5>
            <div>userId -> {this.state.userId}</div>
            <div>userPass -> {this.state.userPass}</div>
        </div>
      </div>
    </Animated>
    );
  }
}

export default Login;