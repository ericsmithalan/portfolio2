import React, { Component } from "react";

export class ShellControl extends Component {
    public render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
