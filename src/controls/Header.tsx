import React, { Component } from "react";
import { ButtonControl, IconSources } from "@controls";
import { Alignment, ButtonKind } from "@core";

export class HeaderControl extends Component {
    public render() {
        return (
            <div className="header">
                <ButtonControl
                    type={ButtonKind.Toggle}
                    iconSource={IconSources.Placeholder}
                    iconAlign={Alignment.Left}
                    onPress={this._menuButtonPress}
                    text="hello world"
                />
                <div>Header</div>
            </div>
        );
    }

    private _menuButtonPress = (event: React.PointerEvent): void => {
        console.log("clicked");
    };
}
