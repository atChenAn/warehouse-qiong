package cn.nanami52.warehouse.responseEntity;

import cn.nanami52.warehouse.entity.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;

@ApiModel("用户列表查询响应模型")
public class ResponseUserListGet extends ResponseBaseData {

    @ApiModelProperty("用户列表信息")
    private List<User> data;

    @Override
    public List<User> getData() {
        return data;
    }

    public void setData(List<User> data) {
        this.data = data;
    }
}
