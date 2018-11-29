import React, { Component } from "react";
import { FooterControl, HeaderControl } from "@controls";

export interface IShellProps {}

export interface IShellState {}

export class ShellControl extends Component<IShellProps, IShellState> {
    public constructor(props: IShellProps) {
        super(props);
    }

    public render() {
        return (
            <div className="shell">
                <HeaderControl />
                {this.props.children}
                <FooterControl />
            </div>
        );
    }
}
