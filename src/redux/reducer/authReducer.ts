import { createSlice } from "@reduxjs/toolkit";


export interface CounterState {
    userData: object
}
const initialState: CounterState = {
    userData: {},
}
const authReducer = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        authData: (state, payload) => {
            state.userData = payload.payload
        }
    }
})
export const { authData } = authReducer.actions
export default authReducer.reducer