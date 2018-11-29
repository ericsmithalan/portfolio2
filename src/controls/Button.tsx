import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@icons";

export enum ButtonKind {
    Standard,
    Toggle
}

export interface IButtonProps {
    type?: ButtonKind;
    icon?: ImageBitmap | undefined;
    text?: string;
    iconAlign?: AlignSetting;
}

interface IButtonState {}

export class ButtonControl extends Component<IButtonProps, IButtonState> {
    public static defaultProps: IButtonProps = {
        type: ButtonKind.Standard,
        iconAlign: "left"
    };

    public constructor(props: IButtonProps) {
        super(Object.assign(ButtonControl.defaultProps, props));
    }

    public render() {
        return (
            <Link to="#">
                <MenuIcon />
                {this.props.text}
            </Link>
        );
    }
}
