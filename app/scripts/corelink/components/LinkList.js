import React from 'react'
import { fetchData } from './../actions/fetchData'

export default class LinkList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
