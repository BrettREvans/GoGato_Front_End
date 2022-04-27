import '../css/fonts.css';
import React from 'react';

const GGMessage = (props) => {


    return( 
        <div className='ggMessage'>
            <h4>{props.usr}</h4>
            <p>{props.contents}</p>
        </div>
            
    )
}

export default GGMessage;