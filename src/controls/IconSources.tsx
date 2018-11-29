import React from "react";

export class IconSources {
    public static Menu: JSX.Element = (
        <g transform="translate(0 1)">
            <rect width="18" height="2" transform="translate(3 4)" />
            <rect width="18" height="2" transform="translate(3 10)" />
            <rect width="18" height="2" transform="translate(3 16)" />
        </g>
    );

    public static Placeholder: JSX.Element = (
        <g transform="translate(0 1)">
            <path
                d="M203-20H187V-36h16v16Zm-5-8a2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2A2,2,0,0,0,198-28Zm-6,0a2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2A2,2,0,0,0,192-28Zm3-5a2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2A2,2,0,0,0,195-33Z"
                transform="translate(-183 40)"
            />
        </g>
    );
}
