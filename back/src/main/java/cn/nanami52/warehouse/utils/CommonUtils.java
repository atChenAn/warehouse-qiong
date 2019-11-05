package cn.nanami52.warehouse.utils;

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

}
