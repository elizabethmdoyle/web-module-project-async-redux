import React from 'react';
import './App.css';
import GifList from './components/GifList'
import GifForm from './components/GifForm';
import data from './data/gifs'
import { connect} from 'react-redux'

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = '';

  console.log(props)

  const { loading, error} = props;
  
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

export default connect(mapStateToProps)(App);