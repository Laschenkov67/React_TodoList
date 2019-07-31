import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import './App.css';

class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem ={
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items:updatedItems,
      id:uuid(),
      item:"",
      editItem:false
    });
  };

  clearList = () => {
    this.setState({
      items:[]
    });
  };

  //Удалить задачу
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItem
    });
  };

  handleEdit = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    const SelectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItem,
      item: SelectedItem.title,
      editItem: true,
      id:id
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">запланируйте задачу</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem = {this.state.editItem}/>
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete ={this.handleDelete} handleEdit ={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
