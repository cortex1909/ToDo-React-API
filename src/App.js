import React, { Component } from 'react'
import Todos from './components/Todos'
import Header from './layout/Header'
import AddTodo from './components/AddTodo'
import About from './pages/About'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'

export default class App extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }

  deleteItem = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id),
        })
      )
  }

  addTodo = (title) => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      deleteItem={this.deleteItem}
                    />
                  </React.Fragment>
                }
              ></Route>
              <Route path="/about" element={About()} />
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}
