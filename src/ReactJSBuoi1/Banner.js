import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div>
        <header className="py-5">
  <div className="container px-lg-5">
    <div className="p-4 p-lg-5 bg-light rounded-3 text-center banner1">
      <div className="m-4 m-lg-5">
        <h1 className="display-5 fw-bold bannerWelcome">A Warm Welcome!</h1>
        <p className="fs-4 bannerLorem">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, labore deserunt vel necessitatibus incidunt esse ea minus quam, odio odit asperiores!.
        </p>
        <a className="btn btn-primary btn-lg bannerButton" href="#!">Call to action!</a> 
        <br /><br />
      </div>
    </div>
  </div>
</header>
      </div>
    )
  }
}
