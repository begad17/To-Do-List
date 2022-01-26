// https://www.youtube.com/watch?v=mDjFfabR294
import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { ToDoRows } from './components/ToDoRows';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Begad',
      toDoItems: [
        { action: 'Read', done: false},
        { action: 'Meditate', done: false },
        { action: 'Code', done: false },
      ],
      newToDo: '',
    };
  }

  updateValue = (event) => {
    this.setState({ newToDo: event.target.value });
  };

  newToDo = () => {
    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        { action: this.state.newToDo, done: false },
      ],
    });
  };

  toDoRows = () =>
    this.state.toDoItems.map((item) => 
      <ToDoRows key={item.action} item={item} callback={this.toggleDone} />
    );

  toggleDone = (todo) =>
    this.setState({
      toDoItems: this.state.toDoItems.map((item) =>
        item.action === todo.action ? {...item, done: !item.done} : item
      ),
    });




  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'Name1' ? 'Name2' : 'Name1',
    });
  }
  render = () => (
    <div className="container">
        <div className="row">
            <Navbar name={this.state.userName} />
            <div className="col-12">
                <input className="form-control" value={this.state.newToDo} onChange={this.updateValue}/>
                <button className="btn btn-primary" onClick={this.newToDo}>Add</button>
        </div>
            </div>
            <div className="col-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Complete</th>
                    </tr>
                  </thead>
                <tbody>{this.toDoRows()}</tbody>
              </table>
            </div>
        </div>
  );
}

