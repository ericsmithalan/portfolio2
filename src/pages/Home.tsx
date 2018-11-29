import React, { Component } from "react";
import { ShellControl } from "@controls";

export class HomePage extends Component {
    public render() {
        return (
            <ShellControl>
                <div className="page">
                    <div>Home page</div>
                </div>
            </ShellControl>
        );
    }
}
