import React from 'react';

interface Iprops {
    backgroundColor: string;
    text: string;
}

function StyledButton (props: Iprops){
    return(

        <button
          style = {{backgroundColor: props.backgroundColor}}
            >
                {props.text}
      </button>
    );
}

export default StyledButton;