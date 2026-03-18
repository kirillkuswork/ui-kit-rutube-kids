import React, { SVGAttributes } from 'react';

const RoundIcon = (props: SVGAttributes<SVGElement>) => (
    <svg
        viewBox="0 0 65 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path fillRule="evenodd"
            clipRule="evenodd"
            d="M24.3334 32C24.3334 36.4183 27.9151 40 32.3334 40C36.7517 40 40.3334 36.4183 40.3334 32C40.3334 27.5817 36.7517 24 32.3334 24C27.9151 24 24.3334 27.5817 24.3334 32ZM48.3334 32C48.3334 40.8366 41.1699 48 32.3334 48C23.4968 48 16.3334 40.8366 16.3334 32C16.3334 23.1634 23.4968 16 32.3334 16C41.1699 16 48.3334 23.1634 48.3334 32Z"
            fill="currentColor" />
    </svg>
);

export default RoundIcon;
