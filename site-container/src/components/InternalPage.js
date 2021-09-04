import React, { Component } from 'react';
import { getMenu } from '../config'

export default class InternalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: '',
      local: '',
      mountUrl: ''
    };
  }
  componentDidMount() {
    const getApp = getMenu().filter(i => i.slug === this.props.local)[0]
    const mountUrl = this.props.slug ? `${getApp.url}/${this.props.slug}/#` : ''

    this.setState({
      mountUrl
    })
  }
  render() {
    const {
      mountUrl
    } = this.state
    return(
      <div className="grid w-full block h-full overflow-hidden">
        <iframe
          title="iframe"
          ref="iframe"
          id="iframe"
          src={mountUrl}
          class="w-full max-h-full h-screen"
        />
      </div>
    )
  }
}
