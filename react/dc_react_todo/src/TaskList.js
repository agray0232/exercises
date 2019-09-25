import React from 'react';

var TaskList = function(props){
  var taskElements = props.tasks.map(task => 
    <li>
      {task}
      <button onClick={ () => props.onCompleteTask(task)}>Done!</button>
    </li>)

    return (
      <ol>
        {taskElements}
      </ol>
    )
}


export default TaskList;