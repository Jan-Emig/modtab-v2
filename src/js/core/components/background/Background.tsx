import {FC} from "react";
import {Box} from "@chakra-ui/react";

interface BackgroundProps {
    image?: string;
    blur?: string | number;
    opacity: number;
}

const Background: FC<BackgroundProps> = ({ image, blur, opacity = 1 }) => {

    const render = () => {
        const validOpacity = Math.min(Math.max(opacity, 0), 1);
        return (
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
                zIndex="-1"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundImage={image}
                filter={blur ? `blur(${blur}px)` : undefined}
                transform={blur ? `scale(1.1)` : undefined}
                opacity={validOpacity}
            />
        );
    }

    return render();
}

export default Background;
