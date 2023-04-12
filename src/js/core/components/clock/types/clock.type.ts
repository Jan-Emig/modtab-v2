export enum ClockType {
    Digital,
    Analog,
    Circle,
    Vertical,
    Indented,
}

export type AnalogClockHandSettings = {
    color?: string;
    length: number;
    thickness: number;
    opacity: number;
    isVisible: boolean;
    smoothTransition: boolean;
}

export type AnalogClockGraduationSettings = {
    isVisible: boolean;
    height: number,
    color?: string,
    width: number,
    opacity: number,
}

export interface ClockProps {
    time: Time;
    fontSize?: string;
}

export type Time = { hour: number, minute: number, second: number };

