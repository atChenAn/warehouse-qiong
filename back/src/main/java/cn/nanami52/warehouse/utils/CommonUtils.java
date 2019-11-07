package cn.nanami52.warehouse.utils;

import cn.nanami52.warehouse.responseEntity.PageInfo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

final public class CommonUtils {

    private static final ObjectMapper objectMapp = new ObjectMapper();

    private CommonUtils() {
    }

    /**
     * 对象转JSON
     *
     * @param obj 需要转换的目标对象
     * @return 返回序列化之后的JSON数据
     * @throws JsonProcessingException
     */
    public static String toJson(Object obj) throws JsonProcessingException {
        return CommonUtils.objectMapp.writeValueAsString(obj);
    }

    public static PageInfo convetPageInfo(com.github.pagehelper.PageInfo pageInfoData) {
        PageInfo pageInfo = new PageInfo();
        pageInfo.setPageNo(pageInfoData.getPageNum());
        pageInfo.setPageSize(pageInfoData.getPageSize());
        pageInfo.setCount(pageInfoData.getTotal());
        pageInfo.setPageCount(pageInfoData.getPages());
        return pageInfo;
    }

}
