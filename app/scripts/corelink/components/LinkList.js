import React from 'react'

export default class LinkList extends React.Component {
  render() {
    const data = this.props.data.categories;

    const title = data.map((obj, index) => {
      return <div key={index}>{obj.title}</div>;
    })

    const links = data.map((obj, index) => {
      let name = obj.links.map((obj, index) => {
        return <li key={index}>{obj.name}</li>;
      })

      return <ul>{name}</ul>;
    })

    return (
      <div>
        <div>{title}</div>
        <div>{links}</div>
      </div>

    )
  }
}
