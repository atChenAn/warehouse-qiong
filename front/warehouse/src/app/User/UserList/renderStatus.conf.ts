import { generateRenderFn, StatusMap, StatusType } from "@/component/Status";
import { UserItem } from "@/type/UserItem";

const userStatus: StatusMap[] = [
  {
    statusVal: 0,
    statusText: "正常",
    statusType: StatusType.STATUS_UNDERWAY
  },
  // {
  //   statusVal: 1,
  //   statusText: "受限",
  //   statusType: StatusType.STATUS_EXCEPTION
  // },
  {
    statusVal: 2,
    statusText: "冻结",
    statusType: StatusType.STATUS_FAILED
  }
];

export default {
  renderStatus: generateRenderFn<UserItem>(userStatus, record => record.status)
};
