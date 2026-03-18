import React, {
    useEffect,
    useRef,
    useState,
} from 'react';

import { NewSkeletonProps } from '@/components/NewSkeleton/types';

export const NewSkeleton: React.FC<NewSkeletonProps> = ({ isLoading, children, ...props }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [elementWidth, setElementWidth] = useState<number | undefined>();
    const [elementHeight, setElementHeight] = useState<number | undefined>();

    useEffect(() => {
        if (ref.current) {
            const { width, height } = ref.current.getBoundingClientRect();
            setElementWidth(width);
            setElementHeight(height);
        }
    }, [ref.current, isLoading]);

    return (
        <div>
            {isLoading ? (
                <div style={{ width: elementWidth, height: elementHeight }} className="animate-skeleton"/>
            ) : (
                React.cloneElement(children, { ...props, ref })
            )}
        </div>
    );
};
