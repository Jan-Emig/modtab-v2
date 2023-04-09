import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer, { BackgroundState } from "./features/backgroundReducer";
import clockReducer, { ClockState } from "./features/clockReducer";
import weatherReducer, { WeatherState } from "./features/weatherReducer";

export type RootState = {
    clock: ClockState;
    weather: WeatherState;
    background: BackgroundState;
}


export const store = configureStore({
    reducer: {
        clock: clockReducer,
        weather: weatherReducer,
        background: backgroundReducer,
    }
})