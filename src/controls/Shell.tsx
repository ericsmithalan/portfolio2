import { FooterControl, HeaderControl } from '@controls';
import React, { Component } from 'react';

type IShellProps = {};

type IShellState = {};

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
