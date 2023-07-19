// Stream of all posts

import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Post from './Post';
import '../styles/Posts.css'

const Posts = ({ items }) => {
    const [itemsLoaded, setItemsLoaded] = useState(0);

    const loadMore = () => {
        // Simulate loading items
        setItemsLoaded(itemsLoaded + 10);
    };

    const hasMore = itemsLoaded < items.length;

    const loader = (
        <div className="loader" key={0}>
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    );

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={hasMore ? loader : null}
            useWindow={false}
        >
            {items.slice(0, itemsLoaded).map((item, index) => (
                <Post key={index} item={item} />
            ))}
        </InfiniteScroll>
    );
};

export default Posts;
