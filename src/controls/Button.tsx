import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Alignment, CssClassArray, ButtonKind } from "@core";
import { Icon } from "@controls";

type ButtonProps = {
    type: ButtonKind;
    iconSource: JSX.Element;
    text: string;
    iconAlign: Alignment;
    url: string;
    onPress: (event: React.MouseEvent) => void;
    onPointerEnter: (event: React.MouseEvent) => void;
    onPointerLeave: (event: React.MouseEvent) => void;
    isSelected: boolean;
};

type ButtonState = {
    isSelected: boolean;
    isMouseover: boolean;
    cssClasses: string;
};

export class ButtonControl extends Component<ButtonProps, ButtonState> {
    public static defaultProps: Partial<ButtonProps> = {
        type: ButtonKind.Standard,
        iconAlign: Alignment.Left
    };

    private readonly _cssClasses: CssClassArray;

    private _hasIcon: boolean;
    private _hasText: boolean;
    private _isSelectable: boolean;

    public constructor(props: ButtonProps) {
        super(props);

        this._cssClasses = new CssClassArray();

        this.state = {
            isSelected: this.props.isSelected || false,
            isMouseover: false,
            cssClasses: ""
        };

        this._hasIcon = true;
        this._hasText = true;
        this._isSelectable = true;
    }

    public get isSelected(): boolean {
        return this.state.isSelected;
    }

    public componentWillMount() {
        if (!this.props.text) {
            this._hasText = false;
        }

        if (!this.props.iconSource) {
            this._hasIcon = false;
        }

        if (this.props.type !== ButtonKind.Toggle) {
            this._isSelectable = false;
        }

        this._setStyles();
    }

    public render(): JSX.Element {
        console.log(this.state.cssClasses);
        return (
            <Link
                className={this.state.cssClasses}
                onPointerEnter={this._pointerEnter}
                onPointerLeave={this._pointerLeave}
                onPointerDown={this._pointerDown}
                onPointerUp={this._pointerUp}
                to="#"
            >
                {this._renderIcon()}
                {this._renderText()}
            </Link>
        );
    }

    private _renderIcon(): JSX.Element {
        if (this._hasIcon) {
            return <Icon source={this.props.iconSource} />;
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

        if (this.props.type === ButtonKind.Toggle) {
            this.setState({ isSelected: !this.state.isSelected });
        }

        this._cssClasses.add("pressed");

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

    private _setStyles() {
        this._cssClasses.add("button");

        if (this._hasIcon) {
            this._setAlignCssClass(this.props.iconAlign);
        }

        if (this._isSelectable) {
            this._cssClasses.add("selectable");
            this._setSelectableCssClass(this.props.isSelected);
        }

        this.setState({ cssClasses: this._cssClasses.classString });
    }

    private _setSelectableCssClass(isSelected: boolean) {
        if (isSelected) {
            this._cssClasses.add("selected");
        } else {
            this._cssClasses.remove("selected");
        }
    }

    private _setAlignCssClass(alignment: Alignment) {
        switch (alignment) {
            case Alignment.Left:
                this._cssClasses.add("left");
                break;
            case Alignment.Right:
                this._cssClasses.add("right");
                break;
            case Alignment.Bottom:
                this._cssClasses.add("bottom");
                break;
            case Alignment.Top:
                this._cssClasses.add("top");
                break;
            default:
                break;
        }
    }
}
