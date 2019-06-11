import React from 'react';

function Key (props) {
    return (
    <div className={"Key col-sm-" + 3*props.widthKey} style={{backgroundColor: props.colorKey} }>
        {props.textDisplay}
    </div>
    );
  }
  
 export default Key;