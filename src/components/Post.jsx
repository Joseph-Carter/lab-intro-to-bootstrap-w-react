import React from "react";
import images from "../images";

const Post = ({ post }) => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={images[post.location.toLowerCase().replace(" ", "-")]}
          className="card-img-top" style={{height:"300px",width:"100%"}}
        />
        <div className="card-body d-block">
          <h4 className="card-title">{post.title}</h4>
          <p className="card-text">{post.location}</p>
          <p className="card-text text-truncate">{post.content}</p>
          <button type="button" className="btn btn-warning">
            Go to Post ▶️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
