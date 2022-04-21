import React from "react";
import blankLike from './../images/BlankLikeGGs.png'
import { useState } from "react";
import blankDislike from './../images/BlankDislikeGGs.png'
import filledDislike from './../images/FilledDislikeGGs.png'
import filledLike from './../images/FilledLikeGGs.png'



export default function Like(){
    const currentUser = "Justin!";
    const [on, setOn] = useState('');
    const [off, setOff] = useState('');
    const[like, setLike] = useState('');
    const[dImage, setDImage] = useState(blankDislike)
    const[lImage, setLImage] = useState(blankLike)
    
   
    
    
    const parentToChild = (like) =>{
            if(on){
            like--;
            setOn(false)
            setLImage(blankLike);
            setLike(like);
            
            }else{
                like++;
                setOn(true);
                setLike(like); 
                setLImage(filledLike);
                if(off){
                    parentToMinusChild(like);
                }      
            }    
        }
    const parentToMinusChild = (like) =>{
        if(off){
            like++;
            setOff(false)
            setLike(like);
            setDImage(blankDislike)
            
            }else{
                like--;
                setDImage(filledDislike)
                setOff(true)
                setLike(like);      
                if(on){
                    parentToChild(like);
                }
            }   
    }
    return(
        <>
            
            <span >
                <img src = {dImage} id = "images" onClick = {() => parentToMinusChild(like)}></img>
                <img src ={lImage} id = "images" onClick = {() => parentToChild(like)}></img>    
            </span>
        </>
    );
}