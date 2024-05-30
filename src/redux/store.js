import { createStore, applyMiddleware, combineReducers } from 'redux';
import boardReducer from './reducers/boardReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  boards: boardReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
