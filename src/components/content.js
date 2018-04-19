import React from 'react';
import Proptypes from 'prop-types';
import {PropsRoute} from 'react-router-with-props';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.renderRoute = this.renderRoute.bind(this);
    this.renderRoutes = this.renderRoutes.bind(this);
  }

  renderRoute(name) {
    const path = this.props.departmentPaths[name],
          component = this.props.departmentComponents[name];

    if (!path) return null;
    return <PropsRoute key={name} path={path} component={component}/>;
  }

  renderRoutes() {
    const routes = this.props.departmentNames.map(this.renderRoute);
    return routes;
  }

  render() {
    return this.renderRoutes();
  }
}

Content.proptypes = {
  departmentNames: Proptypes.array,
  departmentPaths: Proptypes.object,
  departmentComponents: Proptypes.object
};
