import { Collection, ITheme } from "@core";
import React, { Component } from "react";

import { Globals } from "@app";
import { Link } from "react-router-dom";

export interface IButtonProps {
	type: "standard" | "selectable";
	text: string;
	url: string;
	width: number | string;
	height: number | string;
	onPress: (event: React.MouseEvent) => void;
	onPointerEnter: (event: React.MouseEvent) => void;
	onPointerLeave: (event: React.MouseEvent) => void;
	isSelected: boolean;
	theme: ITheme;
}

export interface IButtonState {
	isSelected: boolean;
	cssClasses: string;
	width: number | string;
	height: number | string;
}

export class ButtonControl<TProps extends IButtonProps> extends Component<TProps, IButtonState> {
	public static defaultProps: Partial<IButtonProps> = {
		type: "standard",
		url: "empty",
		height: "auto",
		width: "auto",
		theme: Globals.instance.theme
	};

	private readonly _cssClasses: Collection<string>;
	private readonly _hasText: boolean;
	private readonly _isSelectable: boolean;

	public constructor(props: TProps) {
		super(props);

		this._cssClasses = new Collection<string>();

		this.state = {
			isSelected: this.props.isSelected || false,
			cssClasses: "",
			width: this.props.height,
			height: this.props.height
		};

		if (!this.props.text) {
			this._hasText = false;
		}

		if (this.props.type !== "selectable") {
			this._isSelectable = false;
		}
	}

	public get isSelected(): boolean {
		return this.state.isSelected;
	}

	public get width(): number | string {
		return this.state.width;
	}

	public set width(value: number | string) {
		if (this.state.width !== value) {
			this.setState({ width: value });
		}
	}

	public get height(): number | string {
		return this.state.height;
	}

	public set height(value: number | string) {
		if (this.state.height !== value) {
			this.setState({ height: value });
		}
	}

	protected get cssClasses(): Collection<string> {
		return this._cssClasses;
	}

	protected get isSelectable(): boolean {
		return this._isSelectable;
	}

	protected get hasText(): boolean {
		return this._hasText;
	}

	/** @virtual */
	public componentWillMount(): void {
		this.cssClasses.add("button");
		this.setSelectedCssClass(this.props.isSelected);
		this.setState({ cssClasses: this.cssClasses.classString });
	}

	/** @virtual */
	protected onPointerEnter(event: React.PointerEvent) {
		event.stopPropagation();

		if (this.props.onPointerEnter) {
			this.props.onPointerEnter(event);
		}
	}

	/** @virtual */
	protected onPointerLeave(event: React.PointerEvent) {
		event.stopPropagation();

		if (this.props.onPointerLeave) {
			this.props.onPointerLeave(event);
		}
	}

	/** @virtual */
	protected onPointerDown(event: React.PointerEvent) {
		if (this.props.url === ButtonControl.defaultProps.url) {
			event.preventDefault();
		}

		event.stopPropagation();

		if (this.isSelectable) {
			const isSelected = !this.state.isSelected;
			this.onSelectedChanged(isSelected);
		}

		if (this.props.onPress) {
			this.props.onPress(event);
		}
	}

	/** @virtual */
	protected onPointerUp(event: React.PointerEvent) {
		event.stopPropagation();
	}

	/** @virtual */
	protected onSelectedChanged(isSelected: boolean) {
		this.setSelectedCssClass(isSelected);
		this.setState({ isSelected: isSelected });
	}

	private _renderText(): JSX.Element {
		if (this.hasText) {
			return <span className="text">{this.props.text}</span>;
		}

		return null;
	}

	/**@virtual */
	protected renderMoreJSX(): JSX.Element {
		return null;
	}

	protected setSelectedCssClass(isSelected: boolean) {
		if (this.isSelectable) {
			if (isSelected) {
				this.cssClasses.add("selected");
			} else {
				this.cssClasses.remove("selected");
			}
		}
	}

	public render(): JSX.Element {
		return (
			<Link
				style={{ height: this.state.height, width: this.state.width }}
				className={this.state.cssClasses}
				onPointerEnter={(e) => this.onPointerEnter(e)}
				onPointerLeave={(e) => this.onPointerLeave(e)}
				onPointerDown={(e) => this.onPointerDown(e)}
				onPointerUp={(e) => this.onPointerUp(e)}
				to={this.props.url}
			>
				{this._renderText()}
				{this.renderMoreJSX()}
			</Link>
		);
	}
}
