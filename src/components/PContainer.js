import '../css/fonts.css';
import React, { Component } from "react";
import GGPosts from "./GGPosts";
import GGCreate from './GGCreate';


class PContainer extends Component{
    constructor(){
        super();
        this.state = {post: []};
    }

    componentDidMount(){

        fetch("http://localhost:8761/posts",{
        method: "get",
        })

        .then(response => {

            if(!response.ok){throw Error("Error fetching all user array");}
            return response.json()

            .then(json => {this.setState({ post: json});})

            .catch(err => {throw Error(err.message)});
        });

    }

    render() {
        return (
            <section>
                
                <GGPosts post={this.state.post}/>
            </section>
        )
    }
}

export default PContainer;