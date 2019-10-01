import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../css/resources/Header.css';

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        loginCk: state.loginCk
    };
  }

  function LinkTest() {
    const isLogin = this.props.loginCk
    if(isLogin === 1) {
      return <Link to = "/login">
        마이페이지
      </Link>
    }
    return <Link to = "/login">
        로그인
      </Link>
  }

class Header extends Component {

  
    render() {
    return (
        <div className = 'c-con'>
            <div className = 'c-item'><Link to = "/">메인</Link></div>
            <div className = 'c-item'><Link to = "/BoardList">리스트</Link></div>
            <div className = 'c-item'>
              <LinkTest/>
              </div>
        </div>
        )}
}
export default connect(mapStateToProps)(Header);