import { Icon } from '@controls';
import { Arr } from '@src';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
    type: "Standard" | "Selectable";
    iconSource: JSX.Element;
    text: string;
    iconAlign: "Top" | "Left" | "Bottom" | "Right";
    url: string;
    onPress: (event: React.MouseEvent) => void;
    onPointerEnter: (event: React.MouseEvent) => void;
    onPointerLeave: (event: React.MouseEvent) => void;
    isSelected: boolean;
};

type ButtonState = {
    isSelected: boolean;
    cssClasses: string;
};

export class ButtonControl extends Component<ButtonProps, ButtonState> {
    public static defaultProps: Partial<ButtonProps> = {
        type: "Standard",
        url: "."
    };

    private readonly _cssClasses: Arr<string>;

    private _hasIcon: boolean;
    private _hasText: boolean;
    private _isSelectable: boolean;

    public constructor(props: ButtonProps) {
        super(props);

        this._cssClasses = new Arr<string>();

        this.state = {
            isSelected: this.props.isSelected || false,
            cssClasses: ""
        };

        this._hasIcon = true;
        this._hasText = true;
        this._isSelectable = true;
    }

    public get isSelected(): boolean {
        return this.state.isSelected;
    }

    public componentWillMount(): void {
        if (!this.props.text) {
            this._hasText = false;
        }

        if (!this.props.iconSource) {
            this._hasIcon = false;
        }

        if (this.props.type !== "Selectable") {
            this._isSelectable = false;
        }

        console.log(this.props);
        this._updateStyles();
    }

    public render(): JSX.Element {
        console.log("rendered", this.state.cssClasses);
        return (
            <Link
                className={this.state.cssClasses}
                onPointerEnter={this._pointerEnter}
                onPointerLeave={this._pointerLeave}
                onPointerDown={this._pointerDown}
                onPointerUp={this._pointerUp}
                to={this.props.url}
            >
                {this._renderIcon()}
                {this._renderText()}
            </Link>
        );
    }

    private _renderIcon(): JSX.Element {
        if (this._hasIcon) {
            return (
                <div className="iconWrapper">
                    <Icon source={this.props.iconSource} />
                </div>
            );
        }

        return <span />;
    }

    private _renderText(): JSX.Element {
        if (this._hasText) {
            return <span className="text">{this.props.text}</span>;
        }

        return <span />;
    }

    private _pointerUp = (event: React.PointerEvent): void => {
        event.stopPropagation();
    };

    private _pointerDown = (event: React.PointerEvent): void => {
        event.preventDefault();
        event.stopPropagation();

        if (this._isSelectable) {
            const isSelected = !this.state.isSelected;

            this._setSelectedCssClass(isSelected);
            this.setState({ isSelected: isSelected });
        }

        if (this.props.onPress) {
            this.props.onPress(event);
        }
    };

    private _pointerEnter = (event: React.PointerEvent): void => {
        event.stopPropagation();

        if (this.props.onPointerEnter) {
            this.props.onPointerEnter(event);
        }
    };

    private _pointerLeave = (event: React.PointerEvent): void => {
        event.stopPropagation();

        if (this.props.onPointerLeave) {
            this.props.onPointerLeave(event);
        }
    };

    private _updateStyles() {
        this._cssClasses.add("button");
        this._setAlignCssClass(this.props.iconAlign);
        this._setSelectedCssClass(this.props.isSelected);
        this.setState({ cssClasses: this._cssClasses.classString });
    }

    private _setSelectedCssClass(isSelected: boolean) {
        if (this._isSelectable) {
            if (isSelected) {
                this._cssClasses.add("selected");
            } else {
                this._cssClasses.remove("selected");
            }
        }
    }

    private _setAlignCssClass(alignment: string) {
        if (this._hasIcon && this._hasText) {
            switch (alignment) {
                case "Left":
                    this._cssClasses.add("left");
                    break;
                case "Right":
                    this._cssClasses.add("right");
                    break;
                case "Bottom":
                    this._cssClasses.add("bottom");
                    break;
                case "Top":
                    this._cssClasses.add("top");
                    break;
                default:
                    break;
            }
        }
    }
}
