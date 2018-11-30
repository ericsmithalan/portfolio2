import { App, ServiceWorker } from "@app";

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
ServiceWorker.register();
