import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/home';
import linkBuilder from './builders/linkBuilder';
import DepartmentSection from './builders/sectionBuilder';
import './App.css';
const SECTIONS = [
  {
    to: '/facilities',
    text: 'Facilities',
    component: props => <DepartmentSection {...props}/>
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.buildRoute = this.buildRoute.bind(this);
    this.renderRoutes = this.renderRoutes.bind(this);
  }

  renderLinks(sections) {
    return sections.map(linkBuilder);
  }

  buildRoute(section) {
    return <Route path={section.to} render={() => section.component(this.props)}/>
  }

  renderRoutes(sections) {
    return sections.map(this.buildRoute);
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            {this.renderLinks(SECTIONS)}
          </nav>
        </header>
        <main>
          {this.renderRoutes(SECTIONS)}
          <Route exact path='/' component={Home}/>
        </main>
      </div>
    );
  }
}

export default App;
