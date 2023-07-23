import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Post.css';

const Post = ({ item }) => {

    return (
        <div className="post-wrapper">
            <div className="post-header">
                <img src={item.profilePicture} alt={`${item.name}-profile`} className="profile-pic"/>
                <h3 className="poster-name">{item.name}</h3>
            </div>
            {item.type === 'text' && <p className="post-content">{item.content}</p>}
            {item.type === 'img' && 
                <div className="post-content">
                    <img src={item.content} alt="media-content" className="post-content"/>
                    <p>{item.caption}</p>
                </div>
            }
            {item.type === 'video' && 
                <div className="post-content">
                    <ReactPlayer url={item.content} controls={true} width="100%"/>
                </div>
            }
        </div>
    );
};

export default Post;
