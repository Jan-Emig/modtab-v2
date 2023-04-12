import { border, Box, CircularProgress, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ClockProps } from "../types/clock.type";

/**
 * Circle Clock Face Component
 */
const CircleClock: FC<ClockProps> = ({ time, fontSize = '5rem' }) => {

    const settings = useSelector((state: RootState) => state.clock.clockProperty.circle);
    const fontSettings = useSelector((state: RootState) => state.clock.clockProperty.circle.font);

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
                fontSize={fontSettings?.size}
                color={fontSettings?.color ?? settings.trackColor}
                fontFamily={fontSettings?.family}
                opacity={fontSettings?.opacity}
                // textShadow={ useTextShadow ? '0 0 20px rgba(0, 0, 0, 0.3)' : undefined}
                transform='translate(-50%, -50%)'
            >
                { time.hour.toString().padStart(2, '0') }
                :
                { time.minute.toString().padStart(2, '0') }
                </Heading>
        </CircularProgress>
        // <Box
        //     position='relative'
        //     display='inline-block'
        //     boxSize='270px'
        //     border='8px solid'
        //     borderRadius='full'
        //     borderColor={borderColor}
        //     mb={5}
        //     // color={borderColor}
        // >

        // </Box>
    )
}

export default CircleClock