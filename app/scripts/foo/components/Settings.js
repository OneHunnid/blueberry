import React from 'react';
import { changeName } from './../actions/index';

class Settings extends React.Component {
  onClick(e) {
    e.preventDefault();

    const input = document.querySelector('.js-input');

    if(!input.value.trim()) {
      return
    }
    this.props.dispatch(changeName(input.value))
    input.value = ''
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.onClick.bind(this)}>
          <input className="js-input" placeholder="name..."
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Settings;
