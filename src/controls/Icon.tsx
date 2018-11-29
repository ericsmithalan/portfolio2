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
        width: 32,
        height: 32
    };

    public constructor(props: IconProps) {
        super(props);

        this.state = {
            color: Globals.theme.colors.colorBase.medium
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

        if (this.props.color) {
            this.setState({ color: this.props.color });
        }
    }

    public render() {
        return (
            <svg
                className="iconContainer"
                width={this.props.width}
                height={this.props.height}
                fill={this.state.color}
                transform="0 0"
                preserveAspectRatio="xMaxYMax meet"
                viewBox={`0, 0, ${this.props.width}, ${this.props.height}`}
            >
                {this._source}
            </svg>
        );
    }
}
