import React from 'react'
import { Link } from 'react-router'

export default class SamplePage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="page-container">
      <Link to="/" className="previous-link">Go Back Home</Link>
      <h1>Lipsum Dolar</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat, augue ac aliquam dignissim, risus mi dictum nunc, quis ullamcorper elit felis non mi. Vestibulum sit amet augue a est feugiat tincidunt vitae at odio. Nam rhoncus, nisi ut aliquet lacinia, justo justo tincidunt justo, sit amet bibendum lorem lorem at velit. Vestibulum feugiat risus ligula, quis sagittis odio fringilla id. Pellentesque ut cursus dolor, eu rutrum nibh. Nullam lobortis ipsum consectetur, tincidunt risus eget, tempor felis. In id metus pretium, auctor justo non, pretium dui. Praesent congue ipsum erat, et pellentesque ipsum venenatis a. Integer suscipit feugiat nulla, at scelerisque sapien euismod at.
      </p>

      <h2>Augue aliquan dignissim</h2>
      <h3>Pretium enim</h3>
      <p>Ut sed orci ultrices, fringilla ante suscipit, lacinia tortor. Aenean tempus, est nec maximus lobortis, urna lorem bibendum nunc, ac efficitur elit diam nec nisi. Nulla pulvinar sagittis diam ut dictum. Sed a pharetra nisi. Phasellus pharetra venenatis varius. Suspendisse non mollis magna. In nec metus sed nunc placerat maximus ut ac dui. Nulla sed facilisis metus. Nullam ac blandit odio. Sed pretium enim volutpat ante dictum venenatis.
      </p>

      <h3>Pretium enim</h3>
      <p>Curabitur ullamcorper eu nisl quis tincidunt. Curabitur consectetur feugiat libero, sit amet cursus arcu. Cras eu tempus magna. Sed mauris enim, venenatis in commodo at, consequat in augue. Sed vitae luctus magna. Maecenas porta, massa quis dictum tempor, risus libero scelerisque enim, vel gravida elit mauris non tellus. Quisque mollis vitae eros ac fermentum.
      </p>

      <h3>Pretium enim</h3>
      <p>Cras feugiat tellus vel turpis rutrum, eu faucibus eros tempus. Aliquam hendrerit est vel consequat luctus. Cras ut mauris placerat, consequat justo vitae, rutrum tellus. Nulla at euismod arcu, a ultricies leo. Cras enim mi, tempus id orci id, tempor hendrerit dui. Mauris tincidunt turpis et ipsum rhoncus, eget semper lorem tincidunt. Cras lobortis sed lectus sit amet pulvinar. Proin varius posuere interdum. Praesent pulvinar massa sit amet ultrices tempor. Proin in metus quis augue tincidunt faucibus non nec leo.
      </p>
      </div>
    )
  }
}
