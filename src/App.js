import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import Content from './components/content';
import Navigation from './components/navigation';
import * as departmentActions from './reducers/departmentsReducer';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.loadDepartmentsToStore();
  }

  render() {
    const departmentNames = this.props.departmentNames,
          departmentPaths = this.props.departmentPaths,
          departmentComponents = this.props.departmentComponents;
    return (
      <Router>
        <div>
          <Navigation departmentNames={departmentNames} departmentPaths={departmentPaths}/>
          <Content departmentNames={departmentNames} departmentPaths={departmentPaths} departmentComponents={departmentComponents}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  departments: departmentActions.getDepartments(state),
  departmentNames: departmentActions.getDepartmentNames(state),
  departmentPaths: departmentActions.getDepartmentPaths(state),
  departmentComponents: departmentActions.getDepartmentComponents(state)
});

const mapActionsToProps = {
  ...departmentActions
};

export default connect(mapStateToProps, mapActionsToProps)(App);
