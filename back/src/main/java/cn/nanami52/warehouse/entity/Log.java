package cn.nanami52.warehouse.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("日志数据模型")
public class Log {
    private String id;
    @ApiModelProperty("日志类型：1、添加\n" +
            "2、修改\n" +
            "3、查询\n" +
            "4、删除\n" +
            "5、导入\n" +
            "6、其他")
    private Integer type;
    @ApiModelProperty("用户id")
    private String userId;
    @ApiModelProperty("创建时间")
    private Integer createtime;
    @ApiModelProperty("操作结果：1、成功\n" +
            "2、失败")
    private Integer status;
    @ApiModelProperty("日志附加信息")
    private String description;
    @ApiModelProperty("操作用户名")
    private String username;
    @ApiModelProperty("操作用户昵称")
    private String nickName;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    public Integer getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Integer createtime) {
        this.createtime = createtime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }
}