import React from 'react';

class Card extends React.Component {
  render() {
    console.log(this.props.info.name)
    return (
      <div>
        <h3>Hello, {this.props.info.name}!</h3>
      </div>
    );
  }

}
export default Card;
