import { createSlice, createAction } from '@reduxjs/toolkit'

export const toonSlice = createSlice({
    name: 'toons',
    initialState: {
        mood: 'happy',
        color: 'green',
    },
    reducers: {
        setmood: (state, action) => {
            state.mood = action.payload
            state.color =
                '#' + Math.floor(Math.random() * 16777215).toString(16)
        },
    },
})

// Action creators are generated for each case reducer function
export const { setmood } = toonSlice.actions

export default toonSlice.reducer
