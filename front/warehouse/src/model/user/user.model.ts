import { Model } from "dva";
import produce from "immer";
import { warehouse as API_WAREHOUSE } from "@/api";
import { PopNotification } from "@/utils/popup";

interface UserInfo {
  id: string;
  userName: string;
  nickName: string;
  state: number;
}

interface ReducerData {
  userInfo?: UserInfo;
  [key: string]: any;
}

function getDefState(): ReducerData {
  return {};
}

export default {
  namespace: "user",
  state: getDefState(),
  reducers: {
    setUser(state, { payload }) {
      return produce(state, draft => {
        draft.userInfo = payload;
      });
    }
  },
  effects: {
    *login({ payload }, { put, call, select }) {
      try {
        yield call(API_WAREHOUSE.login_login_post, {
          data: payload.data
        });

        const { data } = yield call(API_WAREHOUSE.login_me_get, {});
        yield put({
          type: "setUser",
          payload: data
        });
        payload.callback && payload.callback();
      } catch (error) {
        console.log(error);
        PopNotification.error(error.message);
      }
    },
    *getMe({ payload }, { put, call, select }) {
      try {
        const { data } = yield call(API_WAREHOUSE.login_me_get, {});
        yield put({
          type: "setUser",
          payload: data
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
} as Model;
