import { ButtonControl, IButtonProps, Icon } from "@controls";
import { Globals, IconSources } from "@app";

import { IPointerEventColors } from "@theme";
import React from "react";

export type IconAlignmentType = "top" | "left" | "bottom" | "right";

export interface IconButtonProps extends IButtonProps {
	iconSource: JSX.Element;
	iconAlign: IconAlignmentType;
	iconColors: IPointerEventColors;
}

export class IconButtonControl extends ButtonControl<IconButtonProps> {
	public static defaultProps: Partial<IconButtonProps> = {
		iconSource: IconSources.Placeholder,
		iconAlign: "left",
		type: "standard",
		url: ".",
		height: "auto",
		width: "auto",
		iconColors: Globals.theme.iconColors
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

	public componentDidMount(): void {
		this._iconRef.current.color = this.props.iconColors.default;
	}

	/** @override */
	protected onPointerEnter(event: React.PointerEvent) {
		super.onPointerEnter(event);

		this._iconRef.current.color = this.props.iconColors.hover;
	}

	/** @override */
	protected onPointerLeave(event: React.PointerEvent) {
		super.onPointerEnter(event);

		this._iconRef.current.color = this.props.iconColors.default;
	}

	/** @override */
	protected onPointerDown(event: React.PointerEvent) {
		super.onPointerDown(event);

		this._iconRef.current.color = this.props.iconColors.press;
	}

	/** @override */
	protected onPointerUp(event: React.PointerEvent) {
		super.onPointerUp(event);

		this._iconRef.current.color = this.props.iconColors.hover;
	}

	/** @override */
	protected renderMoreJSX(): JSX.Element {
		return this._renderIcon();
	}

	private _renderIcon(): JSX.Element {
		return <Icon ref={this._iconRef} source={this.props.iconSource} />;
	}

	protected _setAlignCssClass(alignment: IconAlignmentType) {
		if (this.hasText) {
			switch (alignment) {
				case "left":
					this.cssClasses.add("icon-left");
					break;
				case "right":
					this.cssClasses.add("icon-right");
					break;
				case "bottom":
					this.cssClasses.add("icon-bottom");
					break;
				case "top":
					this.cssClasses.add("icon-top");
					break;
				default:
					break;
			}
		}
	}
}
