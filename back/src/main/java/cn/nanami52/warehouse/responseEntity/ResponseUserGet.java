package cn.nanami52.warehouse.responseEntity;

import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.entity.UserAuth;
import cn.nanami52.warehouse.entity.UserGroup;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("用户详细信息模型")
public class ResponseUserGet extends User {

    @ApiModelProperty("用户组信息")
    private UserAuth[] userAuths;

    public ResponseUserGet() {
        super();
    }

    public ResponseUserGet(String id, String username, String password, Integer userAuth, String nickName, Long createTime, Integer status, Byte isDel, UserAuth[] userAuths) {
        super(id, username, password, userAuth, nickName, createTime, status, isDel);
        this.userAuths = userAuths;
    }

    public UserAuth[] getUserGroups() {
        return userAuths;
    }

    public void setUserGroups(UserAuth[] userGroups) {
        this.userAuths = userGroups;
    }
}
