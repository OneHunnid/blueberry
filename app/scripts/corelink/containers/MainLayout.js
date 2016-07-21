import React from 'react'
import { Link } from 'react-router'

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/" className="heading">CoreLink</Link>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
