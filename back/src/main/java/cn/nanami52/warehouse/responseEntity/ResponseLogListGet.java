package cn.nanami52.warehouse.responseEntity;

import cn.nanami52.warehouse.entity.Log;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;

@ApiModel("日志列表数据模型")
public class ResponseLogListGet extends ResponseBaseData {
    @ApiModelProperty("日志数据列表")
    private List<Log> data;

    @Override
    public List<Log> getData() {
        return data;
    }

    public void setData(List<Log> data) {
        this.data = data;
    }
}
