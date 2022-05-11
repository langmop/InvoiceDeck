
import {  ADD_NEW_PROJECT } from '../actions/constants'

const projects = (state = { isLoading: true, projects: [] }, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case ADD_NEW_PROJECT:
        return { ...state, projects: [...state.projects, action.payload] };
      default:
        return state;
    }
  };

  export default projects