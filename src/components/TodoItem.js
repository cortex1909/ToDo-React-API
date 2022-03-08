import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#e4e4e4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  }

  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            defaultChecked={this.props.todo.completed}
          />{' '}
          {title}
          <button
            style={btnStyle}
            onClick={this.props.deleteItem.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  background: 'none',
  border: 'none',
  color: 'red',
  margin: '0 20px',
  fontWeight: 'bold',
  fontSize: '1.4rem',
  float: 'right',
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}
