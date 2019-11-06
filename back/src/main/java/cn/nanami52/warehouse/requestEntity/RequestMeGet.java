package cn.nanami52.warehouse.requestEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("登陆数据模型")
public class RequestMeGet {

    @ApiModelProperty("用户ID")
    private String id;
    @ApiModelProperty("访问码")
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
