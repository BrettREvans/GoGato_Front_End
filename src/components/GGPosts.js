import '../css/fonts.css';
import React from 'react';
import GGMessage from "./GGMessage";

const GGPosts = props => {

    console.log(props);

    const displayPosts = () => {
        return props.post.map(post => {

            return (<GGMessage usr = {post.userid} contents = {post.contents} time = {post.post_time}/>);

        });
    };

    return (<div className="ggPosts">{displayPosts()}</div>)
}

export default GGPosts;