package cn.nanami52.warehouse.requestEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("用户修改请求模型")
public class RequestUserUpdatePatch {

    @ApiModelProperty("用户ID")
    private String id;
    @ApiModelProperty("用户昵称")
    private String nickName;
    @ApiModelProperty("用户密码")
    private String password;
    @ApiModelProperty("用户组ID（多个组id使用逗号分隔）")
    private String userGroup;
    @ApiModelProperty("用户状态：0：正常 1：受限 2：冻结")
    private String status;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserGroup() {
        return userGroup;
    }

    public void setUserGroup(String userGroup) {
        this.userGroup = userGroup;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
