package cn.nanami52.warehouse.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("用户实体类")
public class User {
    @ApiModelProperty("用户id")
    private String id;
    @ApiModelProperty("用户名")
    private String username;
    @JsonIgnore
    private String password;
    @ApiModelProperty("用户权限[保留字段]")
    private Integer userAuth;
    @ApiModelProperty("用户昵称")
    private String nickName;
    @ApiModelProperty("创建时间戳")
    private Long createTime;
    @ApiModelProperty("账户状态：0、正常 1、受限 2、冻结")
    private Integer status;
    @ApiModelProperty("逻辑删除：1 删除 0 正常")
    private Byte isDel;
    @ApiModelProperty("用户组ID")
    private String groupId;
    @ApiModelProperty("用户组名")
    private String groupName;

    public User() {
    }

    public User(String username, String password, String nickName, Integer status) {
        this.username = username;
        this.password = password;
        this.nickName = nickName;
        this.status = status;
    }

    public User(String id, String username, String password, Integer userAuth, String nickName, Long createTime, Integer status, Byte isDel) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.userAuth = userAuth;
        this.nickName = nickName;
        this.createTime = createTime;
        this.status = status;
        this.isDel = isDel;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
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
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public Integer getUserAuth() {
        return userAuth;
    }

    public void setUserAuth(Integer userAuth) {
        this.userAuth = userAuth;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName == null ? null : nickName.trim();
    }

    public Long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Long createTime) {
        this.createTime = createTime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Byte getIsDel() {
        return isDel;
    }

    public void setIsDel(Byte isDel) {
        this.isDel = isDel;
    }
}