package cn.nanami52.warehouse.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("用户数据类型")
public class User {
    @ApiModelProperty("用户ID")
    private String id;
    @ApiModelProperty("用户名")
    private String username;
    @ApiModelProperty("用户权限")
    private String userAuth;
    @ApiModelProperty("用户昵称")
    private String nickName;
    @ApiModelProperty("创建时间")
    private String createTime;
    @ApiModelProperty("当前账户状态")
    private String status;

    public User() {
    }

    public User(String id, String username, String userAuth, String nickName, String createTime, String status) {
        this.id = id;
        this.username = username;
        this.userAuth = userAuth;
        this.nickName = nickName;
        this.createTime = createTime;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserAuth() {
        return userAuth;
    }

    public void setUserAuth(String userAuth) {
        this.userAuth = userAuth;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
