package cn.nanami52.warehouse.requestEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.*;

@ApiModel("用户添加实体类")
public class RequestUserAddPost {

    @NotEmpty(message = "用户名不能为空")
    @ApiModelProperty("用户名")
    private String username;
    @NotEmpty(message = "用户密码不能为空")
    @ApiModelProperty("用户密码")
    private String password;
    @NotEmpty(message = "用户昵称不能为空")
    @ApiModelProperty("用户昵称")
    private String nickName;
    @NotEmpty(message = "用户组id不能为空")
    @ApiModelProperty("用户组id，多个id使用英文逗号分隔")
    private String userGroup;
    @NotNull(message = "用户状态不能为空")
    @Min(value = 0, message = "用户状态仅能为：0正常1受限2禁用")
    @Max(value = 2, message = "用户状态仅能为：0正常1受限2禁用")
    @ApiModelProperty("用户状态")
    private Integer status;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getUserGroup() {
        return userGroup;
    }

    public void setUserGroup(String userGroup) {
        this.userGroup = userGroup;
    }
}
