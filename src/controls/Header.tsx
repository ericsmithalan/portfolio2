import React, { Component } from "react";
import { ButtonControl } from "@controls";

export class HeaderControl extends Component {
    public render() {
        return (
            <div className="header">
                <ButtonControl text="hello world" />
                <div>Header</div>
            </div>
        );
    }
}
