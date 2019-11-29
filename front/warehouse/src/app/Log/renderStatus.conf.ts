import { generateRenderFn, StatusMap, StatusType } from "@/component/Status";
import { LogItem } from "@/type/LogItem";

const OperateType: StatusMap[] = [
  {
    statusVal: 1,
    statusText: "添加"
  },
  {
    statusVal: 2,
    statusText: "修改"
  },
  {
    statusVal: 3,
    statusText: "查询"
  },
  {
    statusVal: 4,
    statusText: "删除"
  },
  {
    statusVal: 5,
    statusText: "导入"
  },
  {
    statusVal: 6,
    statusText: "其他"
  }
];

const OperateStatus: StatusMap[] = [
  {
    statusVal: 1,
    statusText: "成功",
    statusType: StatusType.STATUS_SUCCESS
  },
  {
    statusVal: 2,
    statusText: "失败",
    statusType: StatusType.STATUS_FAILED
  }
];

export default {
  renderOperateType: generateRenderFn<LogItem>(
    OperateType,
    record => record.type,
    false
  ),
  renderOperateStatus: generateRenderFn<LogItem>(
    OperateStatus,
    record => record.status
  )
};
