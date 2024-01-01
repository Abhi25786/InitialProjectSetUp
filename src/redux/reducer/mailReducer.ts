import { createSlice } from "@reduxjs/toolkit";


export interface CounterState {
    primaryFontFamily: object
}
const initialState: CounterState = {
    primaryFontFamily:    {
        id: 1,
        fontName:'Inter',
        bold: 'Inter-Black',
        medium: 'Inter-Medium',
        regular: 'Inter-Regular'
    },
}
const authReducer = createSlice({
    initialState,
    name: 'main',
    reducers: {
        setPrimaryFont: (state, payload) => {
            state.primaryFontFamily = payload.payload
        }
    }
})
export const { setPrimaryFont } = authReducer.actions
export default authReducer.reducer