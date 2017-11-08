import {combineReducers} from 'redux';

function allProyectos(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const proyectosReducer = combineReducers({allProyectos});

export default proyectosReducer;
