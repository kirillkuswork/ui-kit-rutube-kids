import React, { SVGAttributes } from 'react';

const CircleIcon = (props: SVGAttributes<SVGElement>) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
            fill="#F1F3F8"
        />
        <g clip-path="url(#clip0_2518_551)">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8Z"
                fill="#191A1B"
            />
        </g>
        <defs>
            <clipPath id="clip0_2518_551">
                <rect
                    width="16"
                    height="16"
                    fill="white"
                />
            </clipPath>
        </defs>
    </svg>
);

export default CircleIcon;
