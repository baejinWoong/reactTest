import React from 'react';
import { Link } from "react-router-dom";
import '../../css/resources/Header.css';

function Header () {
    return (
        <div className = 'c-con'>
            <div className = 'c-item'><Link to = "/">메인</Link></div>
            <div className = 'c-item'><Link to = "/BoardList">리스트</Link></div>
            <div className = 'c-item'><Link to = "/login">로그인</Link></div>
        </div>
        );
}

export default Header;