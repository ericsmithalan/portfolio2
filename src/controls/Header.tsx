import { ButtonControl, IconSources } from '@controls';
import React, { Component } from 'react';

export class HeaderControl extends Component {
    public render() {
        return (
            <div className="header">
                <ButtonControl
                    iconSource={IconSources.Placeholder}
                    onPress={this._menuButtonPress}
                />
                <div>Header</div>
            </div>
        );
    }

    private _menuButtonPress = (event: React.PointerEvent): void => {
        console.log("clicked");
    };
}
