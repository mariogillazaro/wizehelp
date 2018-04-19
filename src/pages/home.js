import React from 'react';

export default class Home extends React.Component {
  render() {
    return <p>{this.props.location.pathname}</p>;
  }
}
