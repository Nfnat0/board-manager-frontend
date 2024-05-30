import { createStore, combineReducers } from 'redux';
import boardReducer from './reducers/boardReducer';

const rootReducer = combineReducers({
  boards: boardReducer,
});

const store = createStore(rootReducer);

export default store;
