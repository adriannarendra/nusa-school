import React from 'react';

// Type definition for icon names - this ensures you can only use valid icon names
export type IconName =
    | 'arrowDown'
    //TODO: check if arrowUp is really needed
    | 'arrowRight'
    | 'arrowUp'
    | 'clipboardTick'
    | 'collapse'
    | 'kbm'
    | 'keuangan'
    | 'longArrowDown'
    | 'longArrowUp'
    | 'moneyReceive'
    | 'moneySend'
    | 'notification'
    | 'pmb';

// Type for the props the Icon component accepts
interface IconProps {
    name: IconName;
    className?: string; // Optional prop with default value
    strokeWidth?: string
}

// Type for the icons object - each icon is a function that takes className strokeColor strokeWidth and returns JSX
type IconsMap = Record<IconName, (className: string, strokeWidth: string) => React.JSX.Element>;

// Icons object where each icon is a function returning JSX
const icons: IconsMap = {
    arrowDown: (className, strokeWidth) => (
        <svg 
            className={className}
            viewBox="0 0 24 25" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M19.9201 8.99384L13.4001 15.5138C12.6301 16.2838 11.3701 16.2838 10.6001 15.5138L4.08008 8.99384" 
                stroke="" 
                strokeWidth={strokeWidth} 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
        </svg>
    ),

    arrowRight: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.42578 16.6L12.8591 11.1667C13.5008 10.525 13.5008 9.47503 12.8591 8.83336L7.42578 3.40002"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    arrowUp: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.9201 15.0938L13.4001 8.57384C12.6301 7.80384 11.3701 7.80384 10.6001 8.57384L4.08008 15.0938"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    ),

    clipboardTick: (className, strokeWidth) => (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.75781 12.25L9.00781 13.5L12.3411 10.1667"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.33268 5.00002H11.666C13.3327 5.00002 13.3327 4.16669 13.3327 3.33335C13.3327 1.66669 12.4993 1.66669 11.666 1.66669H8.33268C7.49935 1.66669 6.66602 1.66669 6.66602 3.33335C6.66602 5.00002 7.49935 5.00002 8.33268 5.00002Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.3333 3.34998C16.1083 3.49998 17.5 4.52498 17.5 8.33331V13.3333C17.5 16.6666 16.6667 18.3333 12.5 18.3333H7.5C3.33333 18.3333 2.5 16.6666 2.5 13.3333V8.33331C2.5 4.53331 3.89167 3.49998 6.66667 3.34998"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    collapse: (className, strokeWidth) => (
        <svg
            className={className}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.9707 15.0439V9.04395C21.9707 4.04395 19.9707 2.04395 14.9707 2.04395H8.9707C3.9707 2.04395 1.9707 4.04395 1.9707 9.04395V15.0439C1.9707 20.0439 3.9707 22.0439 8.9707 22.0439H14.9707C19.9707 22.0439 21.9707 20.0439 21.9707 15.0439Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.9707 2.04395V22.0439"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.9702 9.48389L12.4102 12.0439L14.9702 14.6039"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    kbm: (className, strokeWidth) => (
        <svg
            className={className}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.0495 2.57398L4.02953 6.50398C2.09953 7.76398 2.09953 10.584 4.02953 11.844L10.0495 15.774C11.1295 16.484 12.9095 16.484 13.9895 15.774L19.9795 11.844C21.8995 10.584 21.8995 7.77398 19.9795 6.51398L13.9895 2.58398C12.9095 1.86398 11.1295 1.86398 10.0495 2.57398Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.62914 13.124L5.61914 17.814C5.61914 19.084 6.59914 20.444 7.79914 20.844L10.9891 21.904C11.5391 22.084 12.4491 22.084 13.0091 21.904L16.1991 20.844C17.3991 20.444 18.3791 19.084 18.3791 17.814V13.174"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.4004 15.0439V9.04395"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    keuangan: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.3009 7.96393V13.114C19.3009 16.194 17.5409 17.5139 14.9009 17.5139H6.11093C5.66093 17.5139 5.23093 17.474 4.83093 17.384C4.58093 17.344 4.34094 17.274 4.12094 17.194C2.62094 16.634 1.71094 15.334 1.71094 13.114V7.96393C1.71094 4.88393 3.47093 3.56396 6.11093 3.56396H14.9009C17.1409 3.56396 18.7509 4.51396 19.1809 6.68396C19.2509 7.08396 19.3009 7.49393 19.3009 7.96393Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22.302 10.9641V16.1141C22.302 19.1941 20.542 20.514 17.902 20.514H9.11203C8.37203 20.514 7.70204 20.4141 7.12204 20.1941C5.93204 19.7541 5.12203 18.8441 4.83203 17.3841C5.23203 17.4741 5.66203 17.514 6.11203 17.514H14.902C17.542 17.514 19.302 16.1941 19.302 13.1141V7.96405C19.302 7.49405 19.262 7.07408 19.182 6.68408C21.082 7.08408 22.302 8.42405 22.302 10.9641Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.4994 13.1838C11.9574 13.1838 13.1394 12.0019 13.1394 10.5438C13.1394 9.08579 11.9574 7.90381 10.4994 7.90381C9.04136 7.90381 7.85938 9.08579 7.85938 10.5438C7.85938 12.0019 9.04136 13.1838 10.4994 13.1838Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.78125 8.34399V12.744"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.2227 8.34424V12.7443"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    longArrowDown: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.5407 8.41748L6.99982 11.9583L3.45898 8.41748"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 2.04169V11.8592"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    longArrowUp: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.5407 5.58252L6.99982 2.04169L3.45898 5.58252"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 11.9583V2.14081"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    moneyReceive: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.91602 11.4583C7.91602 12.2667 8.54103 12.9167 9.30769 12.9167H10.8743C11.541 12.9167 12.0827 12.35 12.0827 11.6417C12.0827 10.8833 11.7494 10.6083 11.2577 10.4333L8.74935 9.55834C8.25768 9.38334 7.92436 9.11668 7.92436 8.35001C7.92436 7.65001 8.46601 7.07501 9.13268 7.07501H10.6993C11.466 7.07501 12.091 7.72501 12.091 8.53335"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 6.25V13.75"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.3327 10C18.3327 14.6 14.5993 18.3334 9.99935 18.3334C5.39935 18.3334 1.66602 14.6 1.66602 10C1.66602 5.40002 5.39935 1.66669 9.99935 1.66669"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.166 2.5V5.83333H17.4993"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.3327 1.66669L14.166 5.83335"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    moneySend: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.91602 11.4583C7.91602 12.2667 8.54103 12.9167 9.30769 12.9167H10.8743C11.541 12.9167 12.0827 12.35 12.0827 11.6417C12.0827 10.8833 11.7494 10.6083 11.2577 10.4333L8.74935 9.55834C8.25768 9.38334 7.92436 9.11668 7.92436 8.35001C7.92436 7.65001 8.46601 7.07501 9.13268 7.07501H10.6993C11.466 7.07501 12.091 7.72501 12.091 8.53335"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 6.25V13.75"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.3327 10C18.3327 14.6 14.5993 18.3334 9.99935 18.3334C5.39935 18.3334 1.66602 14.6 1.66602 10C1.66602 5.40002 5.39935 1.66669 9.99935 1.66669"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.3333 5.00002V1.66669H15"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.166 5.83335L18.3327 1.66669"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    notification: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0206 2.91003C8.71058 2.91003 6.02058 5.60003 6.02058 8.91003V11.8C6.02058 12.41 5.76058 13.34 5.45058 13.86L4.30058 15.77C3.59058 16.95 4.08058 18.26 5.38058 18.7C9.69058 20.14 14.3406 20.14 18.6506 18.7C19.8606 18.3 20.3906 16.87 19.7306 15.77L18.5806 13.86C18.2806 13.34 18.0206 12.41 18.0206 11.8V8.91003C18.0206 5.61003 15.3206 2.91003 12.0206 2.91003Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601"
                stroke=""
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
            />
        </svg>
    ),

    pmb: (className, strokeWidth) => (
        <svg
            className={className}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 16.7839V4.71389C22 3.51389 21.02 2.62389 19.83 2.72389H19.77C17.67 2.90389 14.48 3.97389 12.7 5.09389L12.53 5.20389C12.24 5.38389 11.76 5.38389 11.47 5.20389L11.22 5.05389C9.44 3.94389 6.26 2.88389 4.16 2.71389C2.97 2.61389 2 3.51389 2 4.70389V16.7839C2 17.7439 2.78 18.6439 3.74 18.7639L4.03 18.8039C6.2 19.0939 9.55 20.1939 11.47 21.2439L11.51 21.2639C11.78 21.4139 12.21 21.4139 12.47 21.2639C14.39 20.2039 17.75 19.0939 19.93 18.8039L20.26 18.7639C21.22 18.6439 22 17.7439 22 16.7839Z"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 5.53394V20.5339"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.75 8.53394H5.5"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.5 11.5339H5.5"
                stroke=""
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = "1.5" }: IconProps): React.JSX.Element | null {
    const iconFunction = icons[name];

    return iconFunction ? iconFunction(className, strokeWidth) : null;
}