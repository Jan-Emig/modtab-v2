import {FC, ReactElement, useState} from "react";
import DigitalClock from "./faces/DigitalClock";
import {ClockType, Time} from "./types/clock.type";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import AnalogClock from "./faces/AnalogClock";
import { useInterval } from "@chakra-ui/react";
import CircleClock from "./faces/CircleClock";

interface ClockProps {
    fontSize?: string;
}

const Clock: FC<ClockProps> = ({ fontSize }) => {
    const [time, setTime] = useState<Time>({ hour: 7, minute: 3 , second: 0})

    const clockType = useSelector((state: RootState) => state.clock.clockType);
    const isAnalogClockSecondHandVisible = useSelector((state: RootState) => state.clock.clockProperty.analog.secondHand.isVisible);

    useInterval(() => {
        const date = new Date();
        if (!isAnalogClockSecondHandVisible && (date.getHours() == time.hour || date.getMinutes() == time.minute)) return;
        setTime({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() })
    }, 1000);

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
            case ClockType.Circle:
                return <CircleClock time={time} fontSize={fontSize} />
            default:
                return <DigitalClock time={time} fontSize={fontSize} />
        }
    }

    return getClockType(clockType);
}

export default Clock;
