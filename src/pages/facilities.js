import React from 'react';

export default class Facilities extends React.Component {
  render() {
    return <p>{this.props.location.pathname}</p>;
  }
}
