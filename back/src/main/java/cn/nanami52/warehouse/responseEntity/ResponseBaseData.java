package cn.nanami52.warehouse.responseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("通用数据返回模型")
public class ResponseBaseData {
    @ApiModelProperty("通用数据对象")
    private Object data;
    @ApiModelProperty("请求错误信息")
    private String message;
    @ApiModelProperty("分页信息")
    private PageInfo meta;

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public PageInfo getMeta() {
        return meta;
    }

    public void setMeta(PageInfo meta) {
        this.meta = meta;
    }

}
