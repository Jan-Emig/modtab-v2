import { createSlice } from "@reduxjs/toolkit";
import { AnalogClockGraduationSettings, AnalogClockHandSettings, ClockType } from "../../components/clock/types/clock.type";
import { RootState } from "../store";

export interface ClockState {
    clockType: ClockType;
    clockProperty: {
        analog: {
            hourHand: AnalogClockHandSettings,
            minuteHand: AnalogClockHandSettings,
            secondHand: AnalogClockHandSettings,
            graduations: {
                major: AnalogClockGraduationSettings,
                minor: AnalogClockGraduationSettings & {
                    density: 24 | 36;
                },
            },
            borderColor: string,
            dotColor?: string,
        }
    }
}

const initState: ClockState = {
    clockType: ClockType.Analog,
    clockProperty: {
        analog: {
            hourHand: {
                length: 5,
                opacity: 1,
                isVisible: true,
                smoothTransition: false,
            },
            minuteHand: {
                length: 3,
                opacity: 0.8,
                isVisible: true,
                smoothTransition: false,
            },
            secondHand: {
                length: 2,
                opacity: 0.5,
                isVisible: true,
                smoothTransition: false,
            },
            graduations: {
                major: {
                    isVisible: true,
                    height: 5,
                    width: 7,
                    opacity: 1,
                },
                minor: {
                    isVisible: false,
                    height: 5,
                    width: 5,
                    density: 24,
                    opacity: 1
                },
            },
            borderColor: 'white',
        },
    },
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