import { Globals } from '@src';
import React, { PureComponent } from 'react';

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

    private _color: string;

    public constructor(props: IconProps) {
        super(props);

        this.state = {
            color: Globals.theme.colors.colorBase.medium
        };
    }

    public get source(): JSX.Element {
        return this._source;
    }

    public get color(): string {
        return this._color;
    }

    public set color(value: string) {
        if (this._color !== value) {
            this._color = value;
            this.setState({ color: value });
        }
    }

    public set source(value: JSX.Element) {
        this._source = value;
    }

    public toOrigionalColor() {
        this.color = this.props.color;
    }

    public componentWillMount() {
        if (this.props.color) {
            this.color = this.props.color;
        }

        if (this.props.source) {
            this.source = this.props.source;
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
