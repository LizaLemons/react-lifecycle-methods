
import React from 'react';

// * This is a functional stateless component * //

const DisplayHowMany = function(props){
  return(
    <div>
      <h2>Count:</h2>
      <p>{props.count}</p>
    </div>
  );
}

export default DisplayHowMany;
