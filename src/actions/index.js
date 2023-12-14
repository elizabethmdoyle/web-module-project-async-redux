import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';



export const getGifs = (searchTerm) => {
    return(dispatch => {
            // dispatch({type: FETCH_START}); - same as below more concise code
            dispatch(fetchStart());
            axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9EyT6uczXZU3JEvPCHfugiHum5rxy7El&q=${searchTerm}`)
            .then(res => {
            // dispatch({type: FETCH_SUCCESS, payload: res.data.data}) - same as below
            dispatch(fetchSuccess(res.data.data))
            })
        }
    )
}

export const fetchStart = () =>{
    return ({type:FETCH_START });
}

export const fetchSuccess = (gifs) => {
    return ({type: FETCH_SUCCESS, payload: gifs})
}