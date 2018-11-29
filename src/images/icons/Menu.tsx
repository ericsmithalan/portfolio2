import React from "react";
import { IconBase } from "@controls";

export class MenuIcon extends IconBase {
    protected renderIcon(): JSX.Element {
        return (
            <g transform="translate(0 1)">
                <rect width="18" height="2" transform="translate(3 4)" />
                <rect width="18" height="2" transform="translate(3 10)" />
                <rect width="18" height="2" transform="translate(3 16)" />
            </g>
        );
    }
}
