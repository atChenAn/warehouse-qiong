package cn.nanami52.warehouse.entity;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("用户组数据模型")
public class UserAuth {
    @ApiModelProperty("权限标识ID")
    private String id;
    @ApiModelProperty("关联的用户ID")
    private String userid;
    @ApiModelProperty("关联的用户用户组ID")
    private String groupid;
    @ApiModelProperty("关联的用户用户组名称")
    private String groupName;

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
        this.id = id == null ? null : id.trim();
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid == null ? null : userid.trim();
    }

    public String getGroupid() {
        return groupid;
    }

    public void setGroupid(String groupid) {
        this.groupid = groupid == null ? null : groupid.trim();
    }
}