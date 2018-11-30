import { IconButtonControl } from '@controls';
import { IconSources } from '@src';
import React, { Component } from 'react';

export class HeaderControl extends Component {
    public render() {
        return (
            <div className="header">
                <IconButtonControl
                    height={50}
                    width={50}
                    iconSource={IconSources.Menu}
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
