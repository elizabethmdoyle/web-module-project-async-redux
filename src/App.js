import React, {useEffect} from 'react';
import './App.css';
import GifList from './components/GifList'
import GifForm from './components/GifForm';
import data from './data/gifs'
import { connect} from 'react-redux'
import { getGifs } from './actions';

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = '';

  console.log(props)

  const { loading, error, getGifs } = props;

  useEffect(() => {
    getGifs('cats');
  //   fetchStart()
  //   console.log('here')
  //   axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9EyT6uczXZU3JEvPCHfugiHum5rxy7El&q=dogs`)
  //       .then(res => {
  //         console.log(res.data.data)
  //         fetchSuccess(res.data.data)
  //       })
  //       .catch(error => console.log(error))
  }, [])
  
  return (
    <div className="App">
      Async Redux Project

      <h1>Searh for GIFS</h1>

      <GifForm />

      { (error !== '') && <h3>{error}</h3> }


      {loading ? <h3>GIFS ARE LOADING</h3>: <GifList />}
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}


export default connect(mapStateToProps, {getGifs})(App);