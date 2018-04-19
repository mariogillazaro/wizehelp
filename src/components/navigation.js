import React from 'react';
import {Link} from 'react-router-dom';
import Proptypes from 'prop-types';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.renderNavLink = this.renderNavLink.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
  }

  renderNavLink(name) {
    const path = this.props.departmentPaths[name];
    if (!path) return null;

    return <li key={name}><Link to={path}>{name}</Link></li>;
  }

  renderNavigation() {
    const navs = this.props.departmentNames.map(this.renderNavLink);

    return (
      <nav>
        <ul>
          {navs}
        </ul>
      </nav>
    );
  }

  render() {
    return this.renderNavigation();
  }
}

Navigation.propTypes = {
  departmentNames: Proptypes.array,
  departmentPaths: Proptypes.object
};
