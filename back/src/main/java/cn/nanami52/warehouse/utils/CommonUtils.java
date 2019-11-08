package cn.nanami52.warehouse.utils;

import cn.nanami52.warehouse.responseEntity.PageInfo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Map;

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

    public static Object jsonToObj(String data, Class<?> clazz) {
        try {
            return new ObjectMapper().readValue(data, clazz);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Map<String, String> jsonToMap(String data) {
        try {
            return CommonUtils.objectMapp.readValue(data, Map.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
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
