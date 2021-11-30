import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { persistor, store } from './store';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@mui/material';


ReactDOM.render(
    <Provider store = { store }>
        <PersistGate persistor={ persistor } loading= { < CircularProgress /> } >
          <App />
        </PersistGate >
    </Provider>,
document.getElementById('root'));


