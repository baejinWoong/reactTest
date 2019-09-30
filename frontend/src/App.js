import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/commenders/Main';
import Login from './components/commenders/Login';
import BoardList from './components/commenders/BoardList';
import Header from './components/resources/Header'

function App() {
  return (
    <Router>
      <Header/>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/BoardList" exact component={BoardList} />
    </Router>
    
  );
}

export default App;
