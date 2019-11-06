package cn.nanami52.warehouse.requestEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("用户查询参数模型")
public class RequestUserListGet extends PageParams {

    @ApiModelProperty("用户ID")
    private String id;
    @ApiModelProperty("用户名")
    private String userName;
    @ApiModelProperty("用户姓名")
    private String nickName;
    @ApiModelProperty("用户组ID")
    private String groupId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return userName;
    }

    public void setUsername(String userName) {
        this.userName = userName;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    @Override
    public String toString() {
        return "ResponseUserListGet{" +
                "id='" + id + '\'' +
                ", userName='" + userName + '\'' +
                ", nickName='" + nickName + '\'' +
                ", groupId='" + groupId + '\'' +
                ", pageNo=" + super.getPageNo() +
                ", pageSize=" + super.getPageSize() +
                '}';
    }
}
