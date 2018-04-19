import React from 'react';

export default class Security extends React.Component {
  render() {
    return <p>{this.props.location.pathname}</p>;
  }
}
