import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/home';
import Store from './store/index';
import Departments from './data/departments';
import linkBuilder from './builders/linkBuilder';
import DepartmentSection from './builders/sectionBuilder';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <Route path={'/'} component={Home}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
