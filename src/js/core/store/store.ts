import { configureStore } from "@reduxjs/toolkit";
import clockReducer, { ClockState } from "./features/clockReducer";
import weatherReducer, { WeatherState } from "./features/weatherReducer";

export type RootState = {
    clock: ClockState;
    weather: WeatherState;
}


export const store = configureStore({
    reducer: {
        clock: clockReducer,
        weather: weatherReducer
    }
})