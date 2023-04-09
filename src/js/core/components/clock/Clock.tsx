import {FC, ReactElement, useEffect, useState} from "react";
import DigitalClock from "./DigitalClock";
import {ClockType, Time} from "./types/clock";
import { RootState, store } from "../../store/store";
import { useSelector } from "react-redux";
import AnalogClock from "./AnalogClock";

interface ClockProps {
    fontSize?: string;
}

const Clock: FC<ClockProps> = ({ fontSize }) => {
    const [time, setTime] = useState<Time>({ hour: 7, minute: 3 })
    let timeInterval: any;

    const clockType = useSelector((state: RootState) => state.clock.clockType);

    useEffect(() => {
        updateTime();
        timeInterval = setInterval(updateTime, 1000);

        return () => {
            clearInterval(timeInterval);
        }
    }, [])

    /**
     * Update the time
     */
    const updateTime = () => {
        const date = new Date();
        if (date.getHours() == time.hour || date.getMinutes() == time.minute) return;
        setTime({ hour: date.getHours(), minute: date.getMinutes() })
    }

    /**
     * Get the clock type
     * @param type The clock type
     */
    const getClockType = (type: ClockType): ReactElement => {
        switch (type) {
            case ClockType.Digital:
                return <DigitalClock time={time} fontSize={fontSize} />
            case ClockType.Analog:
                return <AnalogClock time={time} fontSize={fontSize} />
            default:
                return <DigitalClock time={time} fontSize={fontSize} />
        }
    }

    return getClockType(clockType);
}

export default Clock;
