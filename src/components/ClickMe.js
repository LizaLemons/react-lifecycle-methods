
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

// * This is a functional stateless component * //

const ClickMe = function(props){
  return (
    <div className="the-butts">
      <FloatingActionButton onClick={props.decreaseCount}>
        <ContentRemove />
      </FloatingActionButton>

      <FloatingActionButton onClick={props.increaseCount}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}

export default ClickMe;
