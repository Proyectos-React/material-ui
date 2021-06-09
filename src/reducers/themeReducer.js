import { types } from "../types/types";

const initialState = {
    dark: false
}

export const themeReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.themDark:
            return {
                ...state,
                dark: !state.dark
            }
        default:
            return state;
    }
}