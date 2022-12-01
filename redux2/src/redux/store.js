import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import toonReducer from './toons'

export default configureStore({
    reducer: {
        counter: counterReducer,
        toon: toonReducer,
    },
})
