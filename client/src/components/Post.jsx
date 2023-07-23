import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Post.css';

const Post = ({ item }) => {
    const style = { margin: "2rem 0" };

    if (item.type === 'text') {
        return <p style={style} className="post-content">{item.content}</p>;
    } else if (item.type === 'img') {
        return <img style={style} src={item.content} alt="media-content" className="post-content"/>;
    } else if (item.type === 'video') {
        return (
            <div style={style}>
                <ReactPlayer url={item.content} controls={true} width="100%"/>
            </div>
        );
    } else {
        return null;
    }
};

export default Post;
