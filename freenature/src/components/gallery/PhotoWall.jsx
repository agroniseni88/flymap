import React from 'react';
import Carts from './Carts';


function PhotoWall(props) {
    return (
        <div className='photoGrid'>
            {props.posts.map((post, index) => <Carts key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    )
}

export default PhotoWall;
