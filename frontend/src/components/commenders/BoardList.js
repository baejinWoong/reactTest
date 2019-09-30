import React, { Component } from 'react';
import BoardListPage1 from '../pages/BoardListPage1';
import BoardListPage2 from '../pages/BoardListPage2';

import { connect } from "react-redux";

class boardList extends Component {
    render () {
        return (
            <div>
                <div>
                    <BoardListPage1/>
                </div>
                <div>
                    <BoardListPage2/>
                </div>
                <button onClick={this.props.inc}>Call INC</button>
                <button onClick={this.props.dec}>Call DEC</button>
            </div>
    )}
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(boardList);