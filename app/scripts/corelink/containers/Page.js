import React from 'react'
import SamplePage from './../components/SamplePage'

export default class Page extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section>
        <SamplePage />
      </section>
    )
  }
}
