package cn.nanami52.warehouse.responseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("登陆响应实体")
public class ResponseLoginPost {
    @ApiModelProperty("用户id")
    private String id;
    @ApiModelProperty("访问请求码")
    private String access_token;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }
}
