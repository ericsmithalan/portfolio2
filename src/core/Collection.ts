export class Collection<T> {
	private readonly _items: Array<T>;

	public constructor() {
		this._items = new Array<T>();
	}

	public get classString(): string {
		console.log("added " + this._items);
		return this._items.join(" ");
	}

	public add(item: T): void {
		if (this._items.indexOf(item) <= 0) {
			this._items.push(item);
		}
	}

	public clear(): void {
		for (let i = 0; i < this._items.length; i++) {
			this._items.pop();
		}
	}

	public remove(item: T): void {
		if (this._items.indexOf(item) > 0) {
			for (let i = 0; i < this._items.length; i++) {
				if (this._items[i] === item) {
					this._items.splice(i, 1);
				}
			}
		}
	}
}
