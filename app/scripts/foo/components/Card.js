import React from 'react';

class Card extends React.Component {
  render() {

    if (this.props.info.name === undefined) {
      return <h3>Please enter a name</h3>
    }

    return (
      <div>
        <h3>Hello, {this.props.info.name}!</h3>
      </div>
    )
  }
}
export default Card;
