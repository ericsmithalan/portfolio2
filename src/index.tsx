import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './www/app/';
import registerServiceWorker from './www/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
