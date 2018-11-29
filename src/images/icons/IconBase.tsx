import React, { PureComponent } from "react";
import { Rect } from "@core";

export interface IconProps {
    width: number;
    height: number;
    color: string;
    viewBox: Rect;
}

export abstract class IconBase extends PureComponent<IconProps, {}> {
    public static defaultProps: IconProps = {
        width: 24,
        height: 24,
        color: "#222222",
        viewBox: { x: 0, y: 0, width: 24, height: 24 }
    };

    public constructor(props: IconProps) {
        super(Object.apply(IconBase.defaultProps, props));
    }

    protected abstract renderIcon(): JSX.Element;

    public render() {
        return (
            <div
                className="icon"
                style={{ width: this.props.width, height: this.props.height }}
            >
                <svg
                    width={this.props.width}
                    height={this.props.height}
                    viewBox={`
                        ${this.props.viewBox.x} 
                        ${this.props.viewBox.y} 
                        ${this.props.viewBox.width} 
                        ${this.props.viewBox.height}
                    `}
                >
                    <g fill={this.props.color}>{this.renderIcon()}</g>
                </svg>
            </div>
        );
    }
}
