import React from 'react'
import { fetchData } from './../actions/fetchData'
import { connect } from 'react-redux';
import LinkList from './../components/LinkList'

@connect((store) => {
  console.log(store)
  return {
    data: store.retrieveData.data,
    dispatch: store
  }
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.dispatch(fetchData());
  }
  render() {
    if (this.props.data === undefined) {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <div>
          <LinkList data={this.props.data} dispatch={this.props.dispatch}/>
        </div>
      )
    }
  }
}
