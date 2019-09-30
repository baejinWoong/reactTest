import React from 'react';

import { connect } from "react-redux";

class BoardListPage2 extends React.Component {

  render() {
    return (
        <h1>자식2 -> {this.props.cnt}</h1>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        cnt: state.cnt
    };
  }
  
  
  const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps');
    return {
      inc: () => dispatch({ type: 'INC' }),
      dec: () => dispatch({ type: 'DEC' }),
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(BoardListPage2);