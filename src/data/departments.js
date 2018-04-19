import Home from '../pages/home';
import Facilities from '../pages/facilities';
import People_Ops from '../pages/people_ops';
import Security from '../pages/security';

const departments = [
  {
    path: '/',
    name: 'Home',
    integration: {},
    component: Home,
    isExact: true
  },
  {
    path: '/facilities',
    name: 'Facilities',
    integration: {},
    component: Facilities,
    isExact: false
  },
  {
    path: '/people_ops',
    name: 'People Ops',
    integration: {},
    component: People_Ops,
    isExact: false
  },
  {
    path: '/security',
    name: 'Security',
    integration: {},
    component: Security,
    isExact: false
  }
];

export default departments;
