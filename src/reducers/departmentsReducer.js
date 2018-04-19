import {createAction, handleActions} from 'redux-actions';
import DEPARTMENTS from '../data/departments';

const DEFAULT_STATE ={
  departments: {}
};
const DEPARTMENTS_FETCH = 'DEPARTMENTS_FETCH';
const fetchDepartmentsAction = createAction(DEPARTMENTS_FETCH);
const fetchDepartments = () => new Promise((resolve, reject) => {
  resolve(DEPARTMENTS);
});

const departmentsReducer = handleActions({
  [DEPARTMENTS_FETCH]: (state, action) => ({...state, departments: action.payload})
}, DEFAULT_STATE);

export const loadDepartmentsToStore = () => async dispatch => {
  const departments = await fetchDepartments();
  dispatch(fetchDepartmentsAction(departments));
}

export const getDepartments = state => state.departmentsReducer.departments;
export default departmentsReducer;
