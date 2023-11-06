import { createSlice } from "@reduxjs/toolkit";


export interface CounterState {
    primaryFontFamily: object
    primaryLanguage:string
}
const initialState: CounterState = {
    primaryFontFamily:    {
        id: 1,
        fontName:'Inter',
        bold: 'Inter-Black',
        medium: 'Inter-Medium',
        regular: 'Inter-Regular'
    },
    primaryLanguage:'en'
}
const authReducer = createSlice({
    initialState,
    name: 'main',
    reducers: {
        setPrimaryFont: (state, payload) => {
            state.primaryFontFamily = payload.payload
        },
        primaryLanguage: (state, payload) => {
            state.primaryLanguage = payload.payload
        }
    }
})
export const { setPrimaryFont,primaryLanguage } = authReducer.actions
export default authReducer.reducer