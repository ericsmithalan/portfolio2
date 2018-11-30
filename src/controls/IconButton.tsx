import { ButtonControl, IButtonProps, Icon } from "@controls";
import { Globals, IconSources } from "@app";

import React from "react";

export interface IconButtonProps extends IButtonProps {
	iconSource: JSX.Element;
	iconAlign: "top" | "left" | "bottom" | "right";
}

export class IconButtonControl extends ButtonControl<IconButtonProps> {
	public static defaultProps: Partial<IconButtonProps> = {
		iconSource: IconSources.Placeholder,
		iconAlign: "left",
		type: "standard",
		url: ".",
		height: "auto",
		width: "auto"
	};

	private _iconRef: React.RefObject<Icon>;

	public constructor(props: IconButtonProps) {
		super(props);

		this._iconRef = React.createRef<Icon>();
	}

	/** @override */
	public componentWillMount(): void {
		super.componentWillMount();
		this._setAlignCssClass(this.props.iconAlign);
	}

	/** @override */
	protected onPointerEnter(event: React.PointerEvent) {
		super.onPointerEnter(event);

		this._iconRef.current.color = Globals.instance.theme.iconColors.hover;
	}

	/** @override */
	protected onPointerLeave(event: React.PointerEvent) {
		super.onPointerEnter(event);

		this._iconRef.current.toOrigionalColor();
	}

	/** @override */
	protected onPointerDown(event: React.PointerEvent) {
		super.onPointerDown(event);

		this._iconRef.current.color = Globals.instance.theme.iconColors.press;
	}

	/** @override */
	protected onPointerUp(event: React.PointerEvent) {
		super.onPointerUp(event);

		this._iconRef.current.color = Globals.instance.theme.iconColors.hover;
	}

	/** @override */
	protected renderMoreJSX(): JSX.Element {
		return this._renderIcon();
	}

	private _renderIcon(): JSX.Element {
		return <Icon ref={this._iconRef} source={this.props.iconSource} />;
	}

	protected _setAlignCssClass(alignment: string) {
		if (this.hasText) {
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
