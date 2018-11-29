import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Alignment, CssClassArray, ButtonKind } from "@core";
import { Icon } from "@controls";

type ButtonProps = {
    type?: ButtonKind;
    iconSource?: JSX.Element;
    text?: string;
    iconAlign?: Alignment;
    url?: string;
    onPress?: (event: React.MouseEvent) => void;
    onPointerEnter?: (event: React.MouseEvent) => void;
    onPointerLeave?: (event: React.MouseEvent) => void;
    isSelected?: boolean;
};

type ButtonState = {
    isSelected: boolean;
    isMouseover: boolean;
    cssClasses: string;
};

export class ButtonControl extends Component<ButtonProps, ButtonState> {
    public static defaultProps: ButtonProps = {
        type: ButtonKind.Standard
    };

    public get isSelected(): boolean | undefined {
        return this.state.isSelected;
    }

    private readonly _cssClasses: CssClassArray;

    public constructor(props: ButtonProps) {
        super(Object.assign(ButtonControl.defaultProps, props));

        this._cssClasses = new CssClassArray();

        this.state = {
            isSelected: this.props.isSelected || false,
            isMouseover: false,
            cssClasses: ""
        };
    }

    public componentWillMount() {
        this._cssClasses.add("button");
        this._initializeCssClassNames();

        this.setState({ cssClasses: this._cssClasses.classes });
    }

    public render() {
        return (
            <Link
                className={this._cssClasses.classes}
                onPointerEnter={this._pointerEnter}
                onPointerLeave={this._pointerLeave}
                onPointerDown={this._pointerDown}
                onPointerUp={this._pointerUp}
                to="#"
            >
                <Icon source={this.props.iconSource} />
                <span className="text">{this.props.text}</span>
            </Link>
        );
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

    private _initializeCssClassNames() {
        if (this.props.iconAlign) {
            this._setAlignCssClass(this.props.iconAlign);
        }

        if (this.props.isSelected && this.props.type) {
            this._setSelectableCssClass(this.props.type, this.props.isSelected);
        }
    }

    private _setSelectableCssClass(type: ButtonKind, isSelected: boolean) {
        if (this.props.type) {
            this._cssClasses.add("toggle");

            if (isSelected) {
                this._cssClasses.add("selected");
            } else {
                this._cssClasses.remove("selected");
            }
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
