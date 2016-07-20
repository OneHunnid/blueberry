import React from 'react'

export default class LinkList extends React.Component {
  render() {
    const data = this.props.data.categories;

    const list = data.map((obj, index) => {

      let name = obj.links.map((obj, index) => {
        return <a href={obj.url} className="core-list-item" key={index}>{obj.name}
        <span className="core-list-item-desc">{obj.desc}</span>
        </a>;
      })

      return (
        <div className="core-container">
          <div className="core-title" key={index}>{obj.title}</div>
          <div className="core-list">{name}</div>
        </div>
      )
    });

    return (
      <section className="core">
        <div className="heading">CoreLink</div>
        <div className="core-wrapper">{list}</div>
      </section>
    )
  }
}
