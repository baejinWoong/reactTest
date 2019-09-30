import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';


class LoginPage extends(Component) {

    render() {
        return (
            <div>
                {
                    !this.props.islogin && <Redirect to = "/"/>
                }

                <div>
                    <h1 className='HeadLine'>
                        Login
                    </h1>
                </div>

                <div className="LoginContainer id-box">
                    <div className= 'LoginFont mb5'>
                    아이디
                    </div>
                    
                    <div>
                        <input className = 'form-control InputType'
                        onChange={this.props.idChange}
                        type='text' id='userId'/>
                    </div>

                    <div className = 'LoginFont pass-box mb5'>
                        비밀번호
                    </div>

                    <div>
                        <input className = 'form-control InputType'
                        onChange={this.props.passChange}
                        type='password' id='userPass'/>
                    </div>

                    <div>
                        <button onClick={this.props.handleSubmit} type="button" 
                        className="btn btn-success login-btn">로그인</button>
                    </div>
                    <div>
                    <button onClick={this.props.postTest} type="button" 
                        className="btn btn-success login-btn">postTest</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;