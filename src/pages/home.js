import React from 'react';
import DepartmentSection from '../builders/sectionBuilder';

export default class Home extends React.Component {
  render() {
    console.log(this.props);
    return <DepartmentSection {...this.props}/>;
  }
}