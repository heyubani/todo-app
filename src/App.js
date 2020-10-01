import React from 'react';
import TodoRow from './todoRow'
import TodoBanner from './todoBanner'
import TodoCreator from './todoCreator';
import VisibilityControl from './visibilityControl'
import './App.css';


export default class App extends React.Component {
  state = {
    user: 'Helen',
    userItem: [],
    showCompleted: true
  }


  createNew = (task) => {
    if (!this.state.userItem
      .find(item => item.action === task)) {
      this.setState({
        userItem: [...this.state.userItem, { action: task, done: false }],
        newItem: ''
      },() => localStorage.setItem("todos",JSON.stringify(this.state)));
    }
  }

  toggleTodo = (todo) => this.setState({
    userItem:
      this.state.userItem.map(item => item.action === todo.action ?
        { ...item, done: !item.done } : item)
  });

  todoTableRow = (doneValue) => this.state.userItem
    .filter(item => item.done === doneValue).map(item =>
      <TodoRow key={item.action} item={item}
        callback={this.toggleTodo} />)

        componentDidMount = () =>  {
          let data = localStorage.getItem("todos");
          this.setState( data != null 
            ? JSON.parse(data) :
              {
              user:"Helen",
              userItem:[],
              showCompleted:true
          });
        }


  render() {
    return (
      <div className="ui container segment">
        <TodoBanner name={this.state.user} task={this.state.userItem} />
        <div className="ui container segment">
          <TodoCreator callback={this.createNew} />
        </div>

        <table className="ui table ">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRow(false)}</tbody>
        </table>

        <div style={{ textAlign: 'center' }}>
          <VisibilityControl description="completed task"
            checked={this.state.showCompleted}
            callback={(checked) => this.setState({ showCompleted: checked })} />
          {this.state.showCompleted && <table className="ui table">

            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{this.todoTableRow(true)}</tbody>
          </table>}
        </div>
      </div>
    );
  }
}