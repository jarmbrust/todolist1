import { combineReducers } from 'redux';
import FetchList from './fetchList';


const rootReducer = combineReducers({
  todoItems: FetchList
});

export default rootReducer;
 