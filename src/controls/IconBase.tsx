import React, { PureComponent } from "react";
import { Rect, Theme } from "@core";
import { LightTheme } from "@theme";

interface IconProps {
    width: number;
    height: number;
    color: string;
    viewBox: Rect;
    theme: Theme;
}

interface IconState {
    color: string;
}

export abstract class IconBase extends PureComponent<IconProps, IconState> {
    public static defaultProps: IconProps = {
        width: 24,
        height: 24,
        color: "",
        viewBox: { x: 0, y: 0, width: 24, height: 24 },
        theme: LightTheme
    };

    public constructor(props: IconProps) {
        super(Object.apply(IconBase.defaultProps, props));

        this.state = {
            color: "red"
        };
    }

    protected abstract renderIcon(): JSX.Element;

    public componentWillMount() {
        if (this.props.color === "") {
            this.setState({ color: this.props.theme.colorAccent.high });
        } else {
            this.setState({ color: this.props.color });
        }
    }

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
                    <g fill={this.state.color}>{this.renderIcon()}</g>
                </svg>
            </div>
        );
    }
}
