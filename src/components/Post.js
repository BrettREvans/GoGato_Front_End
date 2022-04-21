
// @Author: Brett Evans

import { useEffect } from "react"
import Like from "../hooks/Like"

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
            "author_username": "user-1",
            "parent_post_id": "1",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time": '2022-03-03 20:44:02'
        },
        {
            "post_id": "3",
            "author_username": "user-1",
            "parent_post_id": "0",
            "like_count": "0",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "post_time":'2022-03-03 20:44:20'
        }
    ]

    const getCommentsByParentId = (id, postList) => {
        let commentList = []
        postList.forEach(element => {
            if (element == id) {
                commentList.push(element)
            }
        });
    }

    const displayPosts = (rawPostList) => {
        for (let i = 0; i < rawPostList.length; i++) {
            try {
                if (rawPostList[i].parent_post_id == 0) {
                    readyPostList.push(
                        <article id={"post" + rawPostList[i].post_id} className="post" key={rawPostList[i].post_id}>
                            <div className="flex-container post-header">
                                <h4>{rawPostList[i].author_username}</h4>
                                <h4>{rawPostList[i].post_time}</h4>
                            </div>
                            <p>{rawPostList[i].content}</p>
                            <div>
                                <Like />
                            </div>
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