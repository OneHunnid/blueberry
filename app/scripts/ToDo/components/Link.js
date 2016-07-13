import React, { PropTypes } from 'react'

// const Link = ({ active, children, onClick }) => {
//   if (active) {
//     return <span>{children}</span>
//   }
//
//   return (
//     <a href="#"
//        onClick={e => {
//          e.preventDefault()
//          onClick()
//        }}
//     >
//       {children}
//     </a>
//   )
// }

// Turned function above into a class
class Link extends React.Component {
  constructor(active, children, onClick) {
    super(active, children, onClick)
  }
  render() {
    return (
      <a href="#"
         onClick={e => {
           e.preventDefault()
           this.props.onClick()
         }}
      >
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
