import { ButtonControl, IButtonProps, Icon } from '@controls';
import { IconSources } from '@src';
import React from 'react';

export interface IconButtonProps extends IButtonProps {
    iconSource: JSX.Element;
    iconAlign: "Top" | "Left" | "Bottom" | "Right";
}

export class IconButtonControl extends ButtonControl<IconButtonProps> {
    public static defaultProps: Partial<IconButtonProps> = {
        iconSource: IconSources.Placeholder,
        iconAlign: "Left",
        type: "Standard",
        url: "."
    };

    private _hasIcon: boolean;
    private _iconRef: React.RefObject<Icon>;

    public constructor(props: IconButtonProps) {
        super(props);
        this._hasIcon = true;

        this._iconRef = React.createRef<Icon>();
    }

    public componentWillMount(): void {
        super.componentWillMount();
        this._setAlignCssClass(this.props.iconAlign);
    }

    protected onPointerEnter(event: React.PointerEvent) {
        super.onPointerEnter(event);

        this._iconRef.current.color = "red";
    }

    protected onPointerLeave(event: React.PointerEvent) {
        super.onPointerEnter(event);

        this._iconRef.current.toOrigionalColor();
    }

    protected onPointerDown(event: React.PointerEvent) {
        super.onPointerDown(event);

        this._iconRef.current.color = "blue";
    }

    protected onPointerUp(event: React.PointerEvent) {
        super.onPointerUp(event);

        this._iconRef.current.color = "red";
    }

    protected renderInnerJSX(): JSX.Element {
        return (
            <div>
                {this.renderText()}
                {this.renderIcon()}
            </div>
        );
    }

    protected renderIcon(): JSX.Element {
        if (this._hasIcon) {
            return (
                <div className="iconWrapper">
                    <Icon ref={this._iconRef} source={this.props.iconSource} />
                </div>
            );
        }

        return <span />;
    }

    protected _setAlignCssClass(alignment: string) {
        if (this._hasIcon && this.hasText) {
            switch (alignment) {
                case "Left":
                    this.cssClasses.add("left");
                    break;
                case "Right":
                    this.cssClasses.add("right");
                    break;
                case "Bottom":
                    this.cssClasses.add("bottom");
                    break;
                case "Top":
                    this.cssClasses.add("top");
                    break;
                default:
                    break;
            }
        }
    }
}
