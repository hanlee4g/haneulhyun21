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
                    {item.caption && <p>{item.caption}</p>}
                </div>
            }
            {item.type === 'video' && 
                <div className="post-content">
                    <ReactPlayer url={item.content} controls={true} width="100%"/>
                    {item.caption && <p>{item.caption}</p>}
                </div>
            }
            {item.type === 'gift' && 
                <div className="post-content">
                    <h2 className="gift-title">{item.title}</h2>
                    <img src={item.content} alt="gift-card" className="post-content"/>
                    <p>Gift card will be emailed or texted to you by EOD</p>
                </div>
            }
        </div>
    );
};

export default Post;
