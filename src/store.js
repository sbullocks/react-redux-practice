// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

const store = configureStore({
    reducer: {
        Counter: counterReducer,
        devTools: process.env.NODE_ENV !== 'production', // allow me to use redux devtools
    },
})
// const store = createStore(counterReducer);

export default store;