import React, { SVGAttributes } from 'react';

const MagnifierIcon = (props: SVGAttributes<SVGElement>) => (
    <svg viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_2284_1093)">
            <path fillRule="evenodd"
                clipRule="evenodd"
                d="M15.2689 16.8598C13.7448 18.0445 11.8298 18.75 9.75 18.75C4.77944 18.75 0.75 14.7206 0.75 9.75C0.75 4.77944 4.77944 0.75 9.75 0.75C14.7206 0.75 18.75 4.77944 18.75 9.75C18.75 11.8298 18.0445 13.7448 16.8598 15.2689L23.2955 21.7045L21.7045 23.2955L15.2689 16.8598ZM16.5 9.75C16.5 13.4779 13.4779 16.5 9.75 16.5C6.02208 16.5 3 13.4779 3 9.75C3 6.02208 6.02208 3 9.75 3C13.4779 3 16.5 6.02208 16.5 9.75Z"
                fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_2284_1093">
                <rect width="24"
                    height="24"
                    fill="currentColor"/>
            </clipPath>
        </defs>
    </svg>
);

export default MagnifierIcon;
