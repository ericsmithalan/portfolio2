import React, { PureComponent } from "react";
import { Rect, Theme } from "@core";
import { LightTheme } from "@theme";

type IconProps = {
    width: number;
    height: number;
    color: string;
    viewBox: Rect;
    theme: Theme;
    source: JSX.Element;
};

type IconState = {
    color: string;
};

export class Icon extends PureComponent<IconProps, IconState> {
    private _source: JSX.Element;

    public static defaultProps: IconProps = {
        width: 24,
        height: 24,
        color: "",
        viewBox: { x: 0, y: 0, width: 24, height: 24 },
        theme: LightTheme,
        source: <g />
    };

    public constructor(props: IconProps) {
        super(Object.apply(Icon.defaultProps, props));

        this.state = {
            color: "red"
        };
    }

    public get source(): JSX.Element {
        return this._source;
    }

    public set source(value: JSX.Element) {
        this._source = value;
    }

    public componentWillMount() {
        if (this.props.source) {
            this.source = this.props.source;
        }

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
                    <g fill={this.state.color}>{this._source}</g>
                </svg>
            </div>
        );
    }
}
