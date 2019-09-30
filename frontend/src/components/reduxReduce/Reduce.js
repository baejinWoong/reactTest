import { INC } from '../reduxAction/Inc.js'
import { DEC } from '../reduxAction/Dec.js'


var initialState = {
    cnt: 0
};


function Reduce(state = initialState, action) {
    switch (action.type) {
        case 'INC':
            return INC(state);
        case 'DEC':
            return DEC(state);
        default:
            return state;
    }
}

export default Reduce;