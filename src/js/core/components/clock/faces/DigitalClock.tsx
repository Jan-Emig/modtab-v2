import React, {FC} from "react";
import {Heading} from "@chakra-ui/react";
import {ClockProps} from "../types/clock.type";

interface DigitalClockProps extends ClockProps {
    useTextShadow?: boolean;
}

const DigitalClock: FC<DigitalClockProps> = ({ time, fontSize = '8rem', useTextShadow }) => {


    const render = () => {
        return (
            <Heading
                fontSize={fontSize}
                color='white'
                textShadow={ useTextShadow ? '0 0 20px rgba(0, 0, 0, 0.3)' : undefined}
            >
                { time.hour.toString().padStart(2, '0') }
                :
                { time.minute.toString().padStart(2, '0') }
                </Heading>
        )
    }

    return render();
}

export default DigitalClock;
