import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { quotesReducer } from './quotes/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  key: 'gbMsngr',
  storage,
  blacklist: ['quotes'],
};

const persistedReducer = persistReducer(config, 
    combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
    quotes: quotesReducer
}), );

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
     );

export const persistor = persistStore(store);
