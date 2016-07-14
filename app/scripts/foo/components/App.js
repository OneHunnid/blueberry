import React from 'react';
import { connect } from 'react-redux';
import { changeName } from './../actions/index';

// class Settings extends React.Component {
//   constructor(dispatch) {
//     super(dispatch)
//   }
//   render() {
//     let input
//     return (
//       <div>
//         <form onSubmit={e => {
//           e.preventDefault()
//           if(!input.value.trim()) {
//             return
//           }
//           this.dispatch(changeName(input.value))
//           input.value = ''
//         }}>
//           <input ref={node => {
//               input = node
//             }} placeholder="name..."
//           />
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }
// Settings = connect()(Settings)
//
// class Card extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3>Name</h3>
//         <div>Position: {this.props.position}</div>
//         <div>Contact:{this.props.contact}</div>
//       </div>
//     );
//   }
// }

@connect((store) => {
  console.log(store.info)
  return {
    name: store.info.name
  }
})

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}!
      </div>
    );
  }
}
