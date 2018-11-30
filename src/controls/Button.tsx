import { Arr } from '@src';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface IButtonProps {
    type: "Standard" | "Selectable";
    text: string;
    url: string;
    onPress: (event: React.MouseEvent) => void;
    onPointerEnter: (event: React.MouseEvent) => void;
    onPointerLeave: (event: React.MouseEvent) => void;
    isSelected: boolean;
}

export interface IButtonState {
    isSelected: boolean;
    cssClasses: string;
}

export class ButtonControl<TProps extends IButtonProps> extends Component<TProps, IButtonState> {
    public static defaultProps: Partial<IButtonProps> = {
        type: "Standard",
        url: "."
    };

    private readonly _cssClasses: Arr<string>;
    private readonly _hasText: boolean;
    private readonly _isSelectable: boolean;

    public constructor(props: TProps) {
        super(props);

        this._cssClasses = new Arr<string>();

        this.state = {
            isSelected: this.props.isSelected || false,
            cssClasses: ""
        };

        if (!this.props.text) {
            this._hasText = false;
        }

        if (this.props.type !== "Selectable") {
            this._isSelectable = false;
        }
    }

    protected get cssClasses(): Arr<string> {
        return this._cssClasses;
    }

    protected get isSelectable(): boolean {
        return this._isSelectable;
    }

    protected get hasText(): boolean {
        return this._hasText;
    }

    public get isSelected(): boolean {
        return this.state.isSelected;
    }

    public componentWillMount(): void {
        this.cssClasses.add("button");
        this.setSelectedCssClass(this.props.isSelected);
        this.setState({ cssClasses: this.cssClasses.classString });
    }

    protected onPointerEnter(event: React.PointerEvent) {
        event.stopPropagation();

        if (this.props.onPointerEnter) {
            this.props.onPointerEnter(event);
        }
    }

    protected onPointerLeave(event: React.PointerEvent) {
        event.stopPropagation();

        if (this.props.onPointerLeave) {
            this.props.onPointerLeave(event);
        }
    }

    protected onPointerDown(event: React.PointerEvent) {
        event.preventDefault();
        event.stopPropagation();

        if (this.isSelectable) {
            const isSelected = !this.state.isSelected;
            this.onSelectedChanged(isSelected);
        }

        if (this.props.onPress) {
            this.props.onPress(event);
        }
    }

    protected onPointerUp(event: React.PointerEvent) {
        event.stopPropagation();
    }

    protected onSelectedChanged(isSelected: boolean) {
        this.setSelectedCssClass(isSelected);
        this.setState({ isSelected: isSelected });
    }

    protected renderText(): JSX.Element {
        if (this.hasText) {
            return <span className="text">{this.props.text}</span>;
        }

        return <span />;
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

    protected renderInnerJSX(): JSX.Element {
        return this.renderText();
    }

    public render(): JSX.Element {
        return (
            <Link
                className={this.state.cssClasses}
                onPointerEnter={(e) => this.onPointerEnter(e)}
                onPointerLeave={(e) => this.onPointerLeave(e)}
                onPointerDown={(e) => this.onPointerDown(e)}
                onPointerUp={(e) => this.onPointerUp(e)}
                to={this.props.url}
            >
                {this.renderInnerJSX()}
            </Link>
        );
    }
}
