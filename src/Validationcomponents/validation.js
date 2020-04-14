import React from 'react'


const validation = (props) => {
    let validationMessage = 'Text long enough';

    if(props.inputLength <=5){
        validationMessage = 'Text too short'
    }


    return (
        <div> 
            {    props.inputLength > 5 ?
                 <p>text long enough</p> : 
                 <p>text too short</p>
            }

        </div>
    );
};

export default validation;