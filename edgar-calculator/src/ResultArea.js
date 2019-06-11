import React from 'react';

function ResultArea (props) {
    return (
    <div className="ResultArea">
        <input type="text" value={props.textResult} />
    </div>
    );
  }
  
 export default ResultArea;