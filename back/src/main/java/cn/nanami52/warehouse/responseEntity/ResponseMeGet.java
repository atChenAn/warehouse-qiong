package cn.nanami52.warehouse.responseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("用户信息实体")
public class ResponseMeGet {
    @ApiModelProperty("用户id")
    private String id;
    @ApiModelProperty("用户名")
    private String userName;
    @ApiModelProperty("昵称")
    private String nickName;
    @ApiModelProperty("用户状态")
    private Integer state;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }
}
