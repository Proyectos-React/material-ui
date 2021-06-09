import { types } from "../types/types";

const initialState = {
    open: true
}

export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiOpenSidebar:
            
            return {
                ...state,
                open: true
            }

        case types.uiCloseSidebar:
            
            return {
                ...state,
                open: false
            }
    
        default:
            return state;
    }
}