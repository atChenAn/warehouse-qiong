import { createActions } from "redux-actions";
import identity from "lodash/identity";

export default createActions({
  user: {
    login: identity,
    getMe: identity
  }
});

export interface UserDispatcher {
  login: Function;
  getMe: Function;
}
