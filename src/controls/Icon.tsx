import React, { PureComponent } from "react";
import { Globals } from "@core";

type IconProps = {
    width: number;
    height: number;
    color: string;
    source: JSX.Element;
};

type IconState = {
    color: string;
};

export class Icon extends PureComponent<IconProps, IconState> {
    private _source: JSX.Element;
    public static defaultProps: Partial<IconProps> = {
        width: 24,
        height: 24
    };

    public constructor(props: IconProps) {
        super(props);

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

        if (!this.props.color) {
            this.setState({ color: Globals.theme.colors.colorAccent.high });
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
                <svg width={this.props.width} height={this.props.height}>
                    <g fill={this.state.color}>{this._source}</g>
                </svg>
            </div>
        );
    }
}
