import React, { SVGAttributes } from 'react';

const ArrowIcon = (props: SVGAttributes<SVGElement>) => (
    <svg viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0486 2L4 7.98927L10.0703 14L11.5 12.5843L6.85937 7.98926L11.4783 3.41565L10.0486 2Z"
            fill="currentColor"/>
    </svg>

);

export default ArrowIcon;
