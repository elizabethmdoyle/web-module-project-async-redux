import React, {useState} from 'react'
import { connect } from 'react-redux';

import { getGifs } from '../actions';

const GifForm = (props) => {

    const {getGifs} = props;

    const [searchTerm, setSearchTerm] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked it')
        getGifs(searchTerm);
    }
     const handleChange = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
     }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
        <input onChange={handleChange}/>
        <button>Search</button>
      </form>
        </div>
    )

}


export default connect(null, {getGifs})(GifForm)


