import React from 'react'
import firebaseTools from './../utils/firebaseWrapper'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    console.log(firebaseTools)
  }
  componentWillMount() {

  }
  render() {
    return (
      <div>hi</div>
    )
  }
}
