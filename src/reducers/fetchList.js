export default function(state = [], action) {

            //return state.concat([ action.payload.data ]); // not mutuating or manipulating state, but returning a whole new one
           //return [ action.payload.data, ...state ];  // same as above in es6, "flattens" array

            return state.concat([ 'test'])
    return state;
}