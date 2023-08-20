import React from 'react';
import images from "../images"

const Post = ({ post }) => {
    return (
        <div className=''>
            <img src={images[post.location.toLowerCase().replace(' ', '-')]}/>
            <h4>{post.title}</h4>
            <p>{post.location}</p>
            <p>{post.content}</p>
            <button>Go to Post</button>
        </div>
    );
}

export default Post;
