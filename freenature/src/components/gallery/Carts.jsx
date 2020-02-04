import React from 'react';


function Carts(props) {
    const post = props.post

    return <figure className='figure'>

        <img className='photo' src={post.imageLink} alt={post.description} style={{ height: '70%' }} />
        <figcaption><p>{post.description} </p></figcaption>
        <div className='button-container'>
            <button onClick={() => { props.onRemovePhoto(post) }} className='remove-button'>Remove</button>
        </div>
    </figure>
}


export default Carts;
