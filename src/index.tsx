import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "@core";
import "@styles/index.scss";
import { ServiceWorker } from "@core";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
ServiceWorker.register();
