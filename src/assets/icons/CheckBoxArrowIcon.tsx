import React, { SVGAttributes } from 'react';

const CheckBoxArrowIcon = (props: SVGAttributes<SVGElement>) => (
    <svg viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path fillRule="evenodd"
            clipRule="evenodd"
            d="M15 7.92065L8.83699 13.2042C8.48765 13.5036 7.9666 13.4836 7.64129 13.1582L5 10.516L6.24533 9.27106L8.31007 11.3365L13.8539 6.5838L15 7.92065Z"
            fill="currentColor"/>
    </svg>

);

export default CheckBoxArrowIcon;
