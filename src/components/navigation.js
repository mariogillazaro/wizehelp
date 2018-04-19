import React from 'react';
import Proptypes from 'prop-types';
import NavLink from './navLink';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.renderNavLink = this.renderNavLink.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
  }

  renderNavLink(name) {
    const path = this.props.departmentPaths[name].path;
    if (!path) return null;

    return <NavLink name={name} path={path}/>;
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

export default Navigation;
