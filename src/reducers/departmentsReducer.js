import {createAction, handleActions} from 'redux-actions';
import DEPARTMENTS from '../data/departments';

const DEFAULT_STATE ={
  departments: []
};
const DEPARTMENTS_FETCH = 'DEPARTMENTS_FETCH';
const fetchDepartmentsAction = createAction(DEPARTMENTS_FETCH);
const fetchDepartments = () => new Promise((resolve, reject) => {
  resolve(DEPARTMENTS);
});

const departmentReducer = handleActions({
  [DEPARTMENTS_FETCH]: (state, action) => ({...state, departments: action.payload})
}, DEFAULT_STATE);

export const loadDepartmentsToStore = () => async dispatch => {
  const departments = await fetchDepartments();
  dispatch(fetchDepartmentsAction(departments));
}

export const getDepartments = state => state.departmentReducer.departments;
export const getDepartmentNames = state => state.departmentReducer.departments.map(department => department.name);
export const getDepartmentComponents = state => state.departmentReducer.departments.reduce((namesToComponents, department ) => ({
  ...namesToComponents,
  [department.name]: department.component
}), {});
export const getDepartmentPaths = state => state.departmentReducer.departments.reduce((namesToPaths, department) => ({
  ...namesToPaths,
  [department.name]: {
    path: department.path,
    isExact: department.isExact
  }
}), {});
export default departmentReducer;
