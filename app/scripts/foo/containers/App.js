import React from 'react';
import { connect } from 'react-redux';
import Settings from './../components/Settings';
import Card from './../components/Card';

@connect((store) => {
  return {
    info: store.info,
    name: store.info.name,
    position: store.info.position,
    contact: store.info.contact
  }
})
export default class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Card info={this.props.info}/>
        <Settings dispatch={this.props.dispatch}/>
      </div>
    );
  }
}
