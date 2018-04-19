import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/home';
import {loadDepartmentsToStore, getDepartments} from './reducers/departmentsReducer';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.loadDepartmentsToStore();
  }

  render() {
    return (
      <Router>
        <Route path={'/'} component={Home}/>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  departments: getDepartments(state)
});

const mapActionsToProps = {
  loadDepartmentsToStore,
  getDepartments
};

export default connect(mapStateToProps, mapActionsToProps)(App);
