import { StatusType } from "./Status";
import { generateRenderFn, StatusMap as _StatusMap } from "./renderStatus";

export interface StatusMap extends _StatusMap {}

export { StatusType, generateRenderFn };
