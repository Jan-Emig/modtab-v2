import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { MusicTrack } from "./types/music";

interface MusicTrackInfoProps {
    artist: MusicTrack['artist'];
    title: MusicTrack['title'];
    length: MusicTrack['length'];
    currentTime: MusicTrack['currentTime'];
    isHover?: boolean
}

const baseProps = {
    transform: 'auto',
    transition: 'transform 0.4s cubic-bezier(.71,-0.08,.25,1)'
}

const MusicTrackInfo: FC<MusicTrackInfoProps> = ({ artist, title, length, currentTime, isHover }) => {


    const render = () => {
        const translateX = isHover ? '0%' : '-115%';
        return (
            <Box
                color='white'
                cursor='default'
            >
                <Heading
                    {...baseProps}
                    fontSize='1.5rem'
                    translateX={translateX}
                >
                    { artist }
                </Heading>
                <Heading 
                    {...baseProps}
                    fontSize='1rem'
                    lineHeight='1.4'
                    opacity={0.8}
                    translateX={translateX}
                    transitionDelay='0.2s'
                >
                    { title }
                </Heading>
                <Heading
                    {...baseProps}
                    fontSize='0.8rem'
                    opacity={0.8}
                    color='primary.500'
                    translateX={translateX}
                    transitionDelay='0.4s'
                >
                    { currentTime } - { length }
                </Heading>
            </Box>
        )
    }

    return render();
}

export default MusicTrackInfo;