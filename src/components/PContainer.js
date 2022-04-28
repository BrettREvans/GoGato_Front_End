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

        fetch("http://localhost:8080/post",{
        method: "get",
        })

        .then(response => {

            if(!response.ok){throw Error("Error fetching all user array");}
            return response.json()

            .then(json => {this.setState({ post: json});})

            .catch(err => {throw Error(err.message)});
        });

        console.log(this.state.post);
    }

    render() {
        return (
            <section>
                <GGCreate post={this.state.post}/>
                <GGPosts post={this.state.post}/>
            </section>
        )
    }
}

export default PContainer;