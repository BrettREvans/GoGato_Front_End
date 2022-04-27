import React from "react";
import blankLike from './../images/BlankLikeGGs.png'
import { useState } from "react";
import blankDislike from './../images/BlankDislikeGGs.png'
import filledDislike from './../images/FilledDislikeGGs.png'
import filledLike from './../images/FilledLikeGGs.png'



export default function Like(likeToChild){
    const [on, setOn] = useState('');
    const [off, setOff] = useState('');
    const[like, setLike] = useState(likeToChild.likeToChild);
    const[dImage, setDImage] = useState();
    const[lImage, setLImage] = useState();
    const[hasState, setHasState] = useState(0);
    const[likesId, setLikesId] = useState();
    const currentpoint = likeToChild.pointsToChild;
    const currentuserid = likeToChild.userIdToChild;
    // const[postId, setPostId] = useState(likeToChild.postIdToChild);
    
        function submitLike(likes){ // this function updates the current amount of likes or dislikes made to a post
            const post ={
                id : likeToChild.postIdToChild,
                contents: likeToChild.contentToChild,
                likes : likes,
                userid : likeToChild.userIdToChild,
                parentid: 0,

            };
            const postJSON =JSON.stringify(post);
        

            const response= fetch(`http://192.168.1.126:8080/post`,{ // For not multi computer enviroment Change 192.168.1.126 =>localhost! if multi computer enviroment change 192.168.1.126 to what you have as you network gateway
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:postJSON,
            });
            if(response.status == 200){
                alert("submitted")
            }

            
            
        }

        function pointUpdate(option){ // this function will update the points a user has based on if it has been liked or disliked
            
            const newPoints = currentpoint + option;
            const users ={
                points: newPoints,
            }
            const userJSON=JSON.stringify(users);

            fetch("http://192.168.1.126:8080/users", { // For not multi computer enviroment Change 192.168.1.126 =>localhost! if multi computer enviroment change 192.168.1.126 to what you have as you network gateway
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:userJSON,
            });

        }

        const userMadeState = (option) =>{
            
           if(hasState == null){ // checks if state is null so that if the user makes a state connection it will post to Likes table
                const state = option;
                const likestate ={
                    userid : likeToChild.userIdToChild,
                    postid : likeToChild.postIdToChild,
                    like_state: state,
                }
                const likestateJSON = JSON.stringify(likestate);
                fetch("http://192.168.1.126:8080/likes", { // For not multi computer enviroment Change 192.168.1.126 =>localhost! if multi computer enviroment change 192.168.1.126 to what you have as you network gateway
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:likestateJSON,
                });
            }else{//if state is not null then instead of making a new post this will instead update the comment based on the id from the likes table earlier recieved on load check lines 110 114 or 119
                const state = option;
                const likestate ={
                    like_state: state,
                }
                const likestateJSON=JSON.stringify(likestate);
                fetch(`http://192.168.1.126:8080/likes/${likesId}`,{
                    method:"PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:likestateJSON,
                });
            }
        }

        

        function isState(currentuserid){//passes the current user id into the function to make a fetch call based on user id
            
            fetch(`http://192.168.1.126:8080/likes/${currentuserid}`) // makes a fetch call to table posts where current user id is found and pulls out all posts user has a state with
            .then(response => response.json())
            .then(data => setHasState(data));
            //ToDo: change hasState()
            if(hasState.like_state = 0){//gets the current state of the post by user id if state is 0 then both are blank 
                setLImage(blankLike);
                setDImage(blankDislike);
                setLikesId((hasState).id);//gets the id from Likes table to make a put method based on the id from the likes table later
            }else if(hasState.like_state = 1){ //if state is one then like is filled dislike is empty and state On is true
                setLImage(filledLike);
                setDImage(blankDislike);
                setLikesId((hasState).id);//gets the id from Likes table to make a put method based on the id from the likes table later
                setOn(true)
            }else if(hasState.like_state = 2){ //if state 2 is on like is blank dislike is filled and state off is true
                setLImage(blankLike);
                setDImage(filledDislike);
                setLikesId((hasState).id);//gets the id from Likes table to make a put method based on the id from the likes table later
                setOff(true)
            }else{ // if user has no relation to the post yet will have both empty
                setLImage(blankLike);
                setDImage(blankDislike)
            }
        }

    
    
    const parentToChild = (likes) =>{
            if(on){ // checks if state on is true if it is then it will fill like image if not will unfill like image
            
            pointUpdate(-1);// updates points on user table by subtracting 1
            
            userMadeState(0);// sets the default state of the likes table to be 0 so that both images will be made blank on start
            
            likes--;//subtracts likes by 1

            setLike(likes);//Sets state Like and adds the current value of likes to be the current value

            setOn(false); //Sets state On to be false so if button is clicked again it will fill the button

            setLImage(blankLike); //sets image to be blank like image

            submitLike(likes);// calls function submitLike to pass value of likes

            }else{
                pointUpdate(1);// updates points by 1 on user table 

                userMadeState(1);// sets state to 1 so on Likes table to that it is stored that the picture is filled

                likes++;// increments likes by 1

                setLike(likes); // Sets state Likes to be the new incremented value of likes

                setOn(true); // sets state On to true so that filled is set on

                setLImage(filledLike); // sets the like image to be filled

                submitLike(likes); // calles function SubmitLike to have the value of likes 

                if(off){// checks if state off is true if it is it will decrement likes by 1 and set the dislike picture to be blank
                    parentToMinusChild(likes);
                }      
            }    
        }
    const parentToMinusChild = (likes) =>{
        
        if(off){// checks if like state is on or not 
            
            pointUpdate(1);// calls pointUpdate function sending one there to add 1 to points
            
            userMadeState(0);// calls userMadeState function so and sets it to 0 so both like and dislike our 0
            
            likes++;// increments curren likes from post table so that it can be stored with like plus one or in this case turning off the dislike state
            
            setLike(likes);// sets state like to be the value likes from the prior increment
            
            setOff(false);// sets state off to false so if dislike is pressed again it will know that it is in empty state
            
            setDImage(blankDislike);//sets image of dislike to be blank
            
            submitLike(likes);// calls function submit likes to fetch a put update into backend
            
            }else{
               
                pointUpdate(-1); // calls point update and puts a value of -1 to subtract 1 from the points of the user
                
                userMadeState(2);// sets the state to 2 so the user has a connection of 2 on table Likes to be disliked on start
                
                likes--;//subtracts 1 from the current value of likes
                
                setDImage(filledDislike);// sets the dislike image to be filled
                
                setOff(true);// sets state off to be true
                
                setLike(likes);  // sets state Like to the value of likes deincremented  
                
                submitLike(likes); //calls function submitLike to store the value of current Likes 
                if(on){
                     parentToChild(likes);//if state on is on it will look at the like button to check for if the button has been liked if it has it will deincrement the number by 1 and turn off the state of like.
                   
                }
            }   
    }
    return(
        <>
            {/* Pages starts here then passes the current user into isState to check if the use has liked a post before*/}
            {isState(currentuserid)};
            
            <span >
                {/*passes the prop like to parentToMinusChild function to check state of dislike button */}
                <img src = {dImage} id = "images" onClick = {() => parentToMinusChild(like)}></img>
                {/*passes the prop like to parentToMinusChild function to check state of like button */}
                <img src ={lImage} id = "images" onClick = {() => parentToChild(like)}></img> 
                {like}  
            </span>

        </>
    );
}