export class CssClassArray {
    private readonly _classes: Array<string>;

    public constructor() {
        this._classes = new Array<string>();
    }

    public get classString(): string {
        console.log("added " + this._classes);
        return this._classes.join(" ");
    }

    public add(className: string): void {
        if (this._classes.indexOf(className) <= 0) {
            this._classes.push(className);
        }
    }

    public clear(): void {
        for (let i = 0; i < this._classes.length; i++) {
            this._classes.pop();
        }
    }

    public remove(className: string): void {
        if (this._classes.indexOf(className) > 0) {
            for (let i = 0; i < this._classes.length; i++) {
                if (this._classes[i] === className) {
                    this._classes.splice(i, 1);
                }
            }
        }
    }
}
