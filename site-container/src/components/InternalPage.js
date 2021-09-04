import React, { Component, createRef, useRef } from 'react';
import { getMenu } from '../config'

export default class InternalPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slug: '',
      local: ''
    };
    this.myRef = createRef()
  }
  componentDidMount() {
    const getApp = getMenu().filter(i => i.slug === this.props.local)[0]
    this.myRef = this.props.slug ? `${getApp.url}/${this.props.slug}/#` : ''
  }
  render() {
    return(
      <div className="grid w-full block h-full overflow-hidden">
        <iframe
          title="iframe"
          id="iframe"
          src={this.myRef}
          className="w-full max-h-full h-screen"
        />
      </div>
    )
  }
}
