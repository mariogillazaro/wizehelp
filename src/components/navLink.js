import React from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

const NavLink = props => (
  <li key={props.name}>
    <Link to={props.path}>
      {props.name}
    </Link>
  </li>
);

NavLink.propTypes = {
  name: Proptypes.string,
  path: Proptypes.string
};

export default NavLink;
