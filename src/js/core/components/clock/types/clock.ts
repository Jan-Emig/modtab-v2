export enum ClockType {
    Digital,
    Analog,
    Circle,
    Vertical,
    Indented,
}

export interface ClockProps {
    time: Time;
    fontSize?: string;
}

export type Time = { hour: number, minute: number };
