import { border, Box, Center, CircularProgress, Flex, Heading, keyframes, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ClockProps } from "../types/clock.type";

const animation = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`

const animationStr = `${animation} 1s ease-in-out infinite alternate`

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
            <Flex
                position='absolute'
                top='50%'
                left='50%'
                fontSize={fontSize}
                fontWeight={fontSettings?.weight}
                color={fontSettings?.color ?? settings.trackColor}
                fontFamily={fontSettings?.family}
                opacity={fontSettings?.opacity}
                textShadow={fontSettings?.shadow}
                transform='translate(-50%, -50%)'
            >
                <Center>
                    <Text>{ time.hour.toString().padStart(2, '0') }</Text>
                </Center>
                <Center>
                    <Text position='relative' transform='translateY(-5%)'>:</Text>
                </Center>
                <Center>
                    <Text>{ time.minute.toString().padStart(2, '0') }</Text>
                </Center>
                {
                    settings.showSeconds && (
                        <Center>
                            { time.second.toString().padStart(2, '0') }
                        </Center>
                    )
                }
            </Flex>
        </CircularProgress>
    )
}

export default CircleClock