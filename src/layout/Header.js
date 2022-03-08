import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDo Header</h1>
      <Link style={linkStyle} to="ToDo-React-API/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="ToDo-React-API/about">
        About
      </Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
}

const linkStyle = {
  color: '#fff',
}
