import { createSlice } from "@reduxjs/toolkit";
import { ClockType } from "../../components/clock/types/clock";
import { RootState } from "../store";

export interface ClockState {
    clockType: ClockType;
}

const initState: ClockState = {
    clockType: ClockType.Digital,
};

export const clockSlice = createSlice({
    initialState: initState,
    name: 'clock',
    reducers: {
        // Change the clock type
        updateClockType: (state, action) => {
            state.clockType = action.payload;
        }
    },
})

export const { updateClockType } = clockSlice.actions;

export default clockSlice.reducer;