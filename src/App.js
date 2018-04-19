import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/home';
import Navigation from './components/navigation';
import * as departmentActions from './reducers/departmentsReducer';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.loadDepartmentsToStore();
  }

  render() {
    const departmentNames = this.props.departmentNames,
          departmentPaths = this.props.departmentPaths;
    return (
      <Router>
        <div>
          <Navigation departmentNames={departmentNames} departmentPaths={departmentPaths}/>
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
