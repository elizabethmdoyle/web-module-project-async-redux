import React from 'react'

 const Gif = (props) => {

    const {gif} = props;

    return (
        <div>
            <h3>{gif.title}</h3>
            <p>{gif.username}</p>
            <img width="200px" src={gif.images.original.url} />
            <p>Rating: <strong>{gif.rating}</strong></p>
            <a target="blank" href={gif.url}><button>Check it out on Giphy</button></a>
        </div>
    )

}
export default Gif