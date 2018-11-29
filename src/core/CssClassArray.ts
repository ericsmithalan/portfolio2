export class CssClassArray {
    private readonly _classes: Array<string>;

    public constructor() {
        this._classes = new Array<string>();
    }

    public get classes(): string {
        return this._classes.join(" ");
    }

    public add(className: string): void {
        if (this._classes.indexOf(name) < 0) {
            this._classes.push(name);
        }
    }

    public clear(): void {
        for (let i = 0; i < this._classes.length; i++) {
            this._classes.pop();
        }
    }

    public remove(className: string): void {
        if (this._classes.indexOf(name) > 0) {
            for (let i = 0; i < this._classes.length; i++) {
                if (this._classes[i] === name) {
                    this._classes.splice(i, 1);
                }
            }
        }
    }
}
