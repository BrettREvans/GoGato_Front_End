import '../css/fonts.css';
import React from 'react';
import GGMessage from "./GGMessage";

const GGPosts = props => {

    const displayPosts = () => {
        return props.post.map(post => {

            return (<GGMessage usr = {post.username} contents = {post.contents}/>);

        });
    };

    return (<div className="ggPosts">{displayPosts()}</div>)
}

export default GGPosts;