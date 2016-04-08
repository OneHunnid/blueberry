import React, {
  Component
} from 'react';

export default class Home extends Component {
  constructor( props ) {
    super( props );

    this.state = {};
  }
  onClick( evt ) {
    this.props.ee.emit('updateNum');
  }
  render() {
    console.log(this.props);
    return (<div>
      <div>{this.props.Model.getNum()}</div>
    <button onClick={(evt)=>this.onClick(evt)}>
      Click!
    </button>
    </div>);
  }
}
