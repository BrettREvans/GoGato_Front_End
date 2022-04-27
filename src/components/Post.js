
// @Author: Brett Evans

import { render } from "@testing-library/react"
import { useEffect, useState } from "react"
import Popup from 'reactjs-popup'
import Like from "../hooks/Like"
import Change from "./Change"

export default function Post() {


    const readyPostList = []
    const rawPostList = [
        {
            "post_id": "1",
            "author_username": "user-1",
            "parent_post_id": "0",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time": '2022-03-03 20:43:21'
        },

        {
            "post_id": "2",
            "author_username": "user-2",
            "parent_post_id": "1",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time": '2022-03-03 20:44:02'
        },
        {
            "post_id": "3",
            "author_username": "user-3",
            "parent_post_id": "2",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time":'2022-03-03 20:44:20'
        },
        {
            "post_id": "4",
            "author_username": "user-4",
            "parent_post_id": "3",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time":'2022-03-03 20:44:20'
        },
        {
            "post_id": "5",
            "author_username": "user-5",
            "parent_post_id": "4",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time":'2022-03-03 20:44:20'
        },

        {
            "post_id": "6",
            "author_username": "user-6",
            "parent_post_id": "1",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time": '2022-03-03 20:44:02'
        },
        {
            "post_id": "7",
            "author_username": "user-7",
            "parent_post_id": "6",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time":'2022-03-03 20:44:20'
        },
        {
            "post_id": "8",
            "author_username": "user-8",
            "parent_post_id": "6",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time":'2022-03-03 20:44:20'
        },
        {
            "post_id": "9",
            "author_username": "user-9",
            "parent_post_id": "8",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time":'2022-03-03 20:44:20'
        }
    ]
    const [editing,setEditState] = useState(false)
    
    const editContent = () => {
        (<Change/>)
    }

    const getCommentsByParentId = (id) => {
        const commentList = []
        rawPostList.forEach(element => {
            if (element.parent_post_id == id) {
                
                commentList.push(
                    <li key={element.post_id}>
                        <article  className="comment" >
                            <div id={"comment" + element.post_id} >
                                <div className="flex-container post-header">
                                    <h5>{element.author_username}</h5>
                                    <h5>{element.post_time}</h5>
                                </div>
                                <p>{element.content}</p>
                            </div>
                        </article>    
                        <ul>{getCommentsByParentId(element.post_id)}</ul>
                    </li>
                )
            }
        });
        console.log(commentList)
        return commentList
    }

    const displayPosts = (rawPostList) => {
        for (let i = 0; i < rawPostList.length; i++) {
            try {
                if (rawPostList[i].parent_post_id == 0) {
                    readyPostList.push(
                        <article  key={rawPostList[i].post_id}>
                            <div className="post" id={"post" + rawPostList[i].post_id} >
                                <div className="flex-container post-header">
                                    <h4>{rawPostList[i].author_username}</h4>
                                    <h4>{rawPostList[i].post_time}</h4>
                                </div>
                                    <p>{rawPostList[i].content}</p>
                                <div>
                                    <Like />
                                    <Popup trigger={<button>Edit</button>} modal nested>
                                        <Change/>
                                    </Popup>
                                    
                                </div>    
                            </div>
                            
                            <ul>{getCommentsByParentId(rawPostList[i].post_id, rawPostList)}</ul>
                        </article>
                        
                    )
                }
            } catch (e) {
                readyPostList.push(
                    <article id="defaultPost" className="post" key={0}>
                        <h6></h6>
                        <h6></h6>
                        <p></p>
                    </article>
                )
            }
        }
    }
    
    if (readyPostList.length == 0) {
        displayPosts(rawPostList)
    }

    return (
        <section id="post-container" className="flex-container">
            {readyPostList}
        </section>
    ) 
}





// ( <Popup trigger={<button className="button"> Open Modal </button>} modal nested >
//  {close => ( 
//     <div className="modal">
//     </div>)} </Popup>);