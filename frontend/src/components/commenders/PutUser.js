import React, { Component } from 'react';
import Axios from 'axios';

class putUser extends Componemt {

    constructor(props) {
        super(props);
        this.state = {
           id : '',
           pass : '',
           passCk : '',
           old : '',
           gender : '',
           nickname : ''
        }
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
    
    render () {
        return (
            <div>
                hello
            </div>
        )
    }
}
export default putUser;