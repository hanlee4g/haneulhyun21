// Component for all posts: videos, images, and text

import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Post.css';

const Post = ({ item }) => {
    if (item.type === 'text') {
        return <p className="post-content">{item.content}</p>;
    } else if (item.type === 'img') {
        return <img src={item.content} alt="media-content" className="post-content"/>;
    } else if (item.type === 'video') {
        return <ReactPlayer url={item.content} controls={true} width="100%"/>;
    } else {
        return null;
    }
};

export default Post;
