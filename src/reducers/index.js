import {combineReducers} from 'redux';
import proyectosReducer from './proyectosReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    proyectos: proyectosReducer,
    filter: filterReducer
});

export default rootReducer;
