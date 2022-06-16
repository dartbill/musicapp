import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import MusicReducer from './reducers/musicReducer'
const store = createStore(MusicReducer)

export default store;