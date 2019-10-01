import { INC } from '../reduxAction/Inc.js'
import { DEC } from '../reduxAction/Dec.js'
import { LOGIN } from '../reduxAction/LOGIN.js'


var initialState = {
    cnt: 0,
    loginCk : 0
};


function Reduce(state = initialState, action) {
    switch (action.type) {
        case 'INC':
            return INC(state);
        case 'DEC':
            return DEC(state);

        case 'LOGIN' :
            return LOGIN(state);

        default:
            return state;
    }
}

export default Reduce;