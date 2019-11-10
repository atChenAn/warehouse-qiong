import { Model } from "dva";
interface UserState {
  userInfo: any;
}

function getDefState() {
  return { userInfo: null };
}

export default {
  namespace: "user",
  state: getDefState(),
  reducers: {}
} as Model;
