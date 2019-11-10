package cn.nanami52.warehouse.requestEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@ApiModel("用户修改请求模型")
public class RequestUserUpdatePatch {

    @ApiModelProperty("用户昵称")
    private String nickName;
    @ApiModelProperty("用户密码")
    private String password;
    @ApiModelProperty("用户组ID（多个组id使用逗号分隔）")
    private String userGroup;
    @Min(value = 0, message = "用户状态仅能为：0正常1受限2禁用")
    @Max(value = 2, message = "用户状态仅能为：0正常1受限2禁用")
    @ApiModelProperty("用户状态：0：正常 1：受限 2：冻结")
    private Integer status;


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

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
