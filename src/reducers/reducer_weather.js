import  {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
    switch(action.type){
        case  FETCH_WEATHER:
        //concats avoids mutating the existing state, rather it adds new array of data to
        //existing state
        // return [action.payload.data, ...state] does the same thing ES6
        return state.concat([action.payload.data]);
    }
    return state;
}