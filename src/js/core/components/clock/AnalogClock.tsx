import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ClockProps } from "./types/clock";

interface AnalogClockProps extends ClockProps {

}

const timeLabels = [
    {
        label: '12',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    {
        label: '3',
        top: '50%',
        right: '12px',
        transform: 'translateY(-50%)'
    },
    {
        label: '6',
        top: 'calc(100% - 2rem - 12px)',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    {
        label: '9',
        top: '50%',
        left: '12px',
        transform: 'translateY(-50%)'
    }
]

/**
 * Analog Clock Face Component
 */
const AnalogClock: FC<AnalogClockProps> = ({ time, fontSize = '2rem' }) => {

    // time.hour = 8;
    // time.minute = 20;
    return (
        <Box
            position='relative'
            display='inline-block'
            boxSize='270px'
            border='8px solid white'
            borderRadius='full'
            mb={5}
            color='white'
        >
            {
                timeLabels.map((label, index) => (
                    <Text
                        key={index}
                        position='absolute'
                        top={label.top}
                        left={label.left}
                        right={label.right}
                        transform={label.transform}
                        fontSize={fontSize}
                        fontWeight='bold'
                    >{label.label}</Text>
                ))
            }
            <Box
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
            >
                <Box
                    position='absolute'
                    top='calc(50% - 10px)'
                    left='calc(50% - 10px)'
                    boxSize='20px'
                    borderRadius='full'
                    bg='white'
                />
                <Box
                    position='absolute'
                    left='-2.5px'
                    transform={`rotate(${(time.hour % 12 + time.minute / 60) * 30 -180 }deg)`}
                    transformOrigin='top center'
                    width='5px'
                    height='50px'
                    borderRadius='full'
                    bg='white'
                />
                <Box
                    position='absolute'
                    left='-2.5px'
                    transform={`rotate(${time.minute * 6 - 180 }deg)`}
                    transformOrigin='top center'
                    width='5px'
                    height='100px'
                    borderRadius='full'
                    bg='white'
                    opacity={0.5}
                />
            </Box>
        </Box>
    )
}

export default AnalogClock;