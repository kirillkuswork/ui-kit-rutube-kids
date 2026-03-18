import {
    useState,
    useCallback,
} from 'react';

export const useHover = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    const hoverProps = {
        onMouseEnter,
        onMouseLeave,
    };

    return [isHovered, hoverProps] as const;
};
