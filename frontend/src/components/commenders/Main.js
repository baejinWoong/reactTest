
import React, { Component } from 'react';
import Axios from 'axios';

import MainPage from '../pages/MainPage';

class Main extends Component {

    componentDidMount() {
        console.log('call componentDidMount');

        Axios.get('/getCookie')
          .then(function (response) {
              console.log(response.data);
              
          })
          .catch(function(error) {
          })
    }

    render () {
        return (
            <MainPage />
        )
    }
}
export default Main;