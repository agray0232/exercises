import React from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {tasks: []}
    this.addTask = this.addTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  addTask(task) {
    this.setState((prevState) => ( {tasks: [...prevState.tasks, task]} ))
  }

  completeTask(task) {
    this.setState( (prevState) => ({ tasks: prevState.tasks.filter(t => t !== task)}))
  }

  render(){

    return (
      <div>
        <TaskForm onAddTask={this.addTask} />
        <TaskList tasks={this.state.tasks} onCompleteTask={this.completeTask} />
      </div>
    )
  }
}


export default App;
