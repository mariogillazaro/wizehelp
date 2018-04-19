import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './pages/home';
import * as departmentActions from './reducers/departmentsReducer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderNavLink = this.renderNavLink.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
  }

  componentDidMount() {
    this.props.loadDepartmentsToStore();
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
    return (
      <Router>
        <div>
          {this.renderNavigation()}
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  departments: departmentActions.getDepartments(state),
  departmentNames: departmentActions.getDepartmentNames(state),
  departmentPaths: departmentActions.getDepartmentPaths(state)
});

const mapActionsToProps = {
  ...departmentActions
};

export default connect(mapStateToProps, mapActionsToProps)(App);
