import { create } from "state-container";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

export default create(browserHistory, process.env.NODE_ENV, error =>
  console.error(error)
);
