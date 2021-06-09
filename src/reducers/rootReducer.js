import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { themeReducer } from './themeReducer';
import { uiReducer } from './uiReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    theme: themeReducer
})

