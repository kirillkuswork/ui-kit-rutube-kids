import React, { SVGAttributes } from 'react';

const LoaderIcon = (props: SVGAttributes<SVGElement>) => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        {...props}
    >
        <path
            d="M34.5 20a1.5 1.5 0 0 0-3 0h3ZM20 8.5a1.5 1.5 0 0 0 0-3v3ZM31.5 20c0 6.351-5.149 11.5-11.5 11.5v3c8.008 0 14.5-6.492 14.5-14.5h-3ZM20 31.5c-6.351 0-11.5-5.149-11.5-11.5h-3c0 8.008 6.492 14.5 14.5 14.5v-3ZM8.5 20c0-6.351 5.149-11.5 11.5-11.5v-3C11.992 5.5 5.5 11.992 5.5 20h3Z"
            fill="currentColor"
        />
    </svg>
);

export default LoaderIcon;
