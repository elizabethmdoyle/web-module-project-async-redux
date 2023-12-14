import data from '../data/gifs';
import { FETCH_START, FETCH_SUCCESS } from '../actions';

const initialState = {
     gifs: data,
     loading: false,
     error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                gifs: action.payload,
                loading: false,
                error: ''
            }
        // case FETCH_FAIL:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: "There was an error loading gifs"
        //     }
        default:
            return(state)
    }
}

export default reducer