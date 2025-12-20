// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import addOnsReducer from './addOnsSlice'


export default configureStore({
    reducer: {
        venue: venueReducer,
        addOns: addOnsReducer,
    },
});
