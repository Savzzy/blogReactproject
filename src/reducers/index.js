import { combineReducers} from 'redux';
import postReducers from './postReducers';

const reducers =  combineReducers({
    posts : postReducers
});

export default reducers;