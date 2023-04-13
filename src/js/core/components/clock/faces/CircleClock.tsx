import { border, Box, CircularProgress, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ClockProps } from "../types/clock.type";

/**
 * Circle Clock Face Component
 */
const CircleClock: FC<ClockProps> = ({ time }) => {

    const settings = useSelector((state: RootState) => state.clock.clockProperty.circle);
    const fontSettings = useSelector((state: RootState) => state.clock.clockProperty.circle.font);
    const secondsFontSettings = useSelector((state: RootState) => state.clock.clockProperty.circle.secondsFont);

    const fontSize = settings.showSeconds ? secondsFontSettings?.size ?? fontSettings?.size : fontSettings?.size;
    
    return (
        <CircularProgress
            max={60}
            value={23}
            size={settings.size + 'px'}
            thickness={settings.thickness + 'px'}
            color={settings.showProgress ? settings.progressColor : settings.trackColor}
            trackColor={settings.trackColor}
            capIsRound={settings.isCapRound}
        >
            <Heading
                position='absolute'
                top='50%'
                left='50%'
                fontSize={fontSize}
                color={fontSettings?.color ?? settings.trackColor}
                fontFamily={fontSettings?.family}
                opacity={fontSettings?.opacity}
                textShadow={fontSettings?.shadow}
                transform='translate(-50%, -50%)'
            >
                { time.hour.toString().padStart(2, '0') }
                :
                { time.minute.toString().padStart(2, '0') }
                {
                    settings.showSeconds && (
                        ":" + time.second.toString().padStart(2, '0')
                    )
                }
                </Heading>
        </CircularProgress>
    )
}

export default CircleClock