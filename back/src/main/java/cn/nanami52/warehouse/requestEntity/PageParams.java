package cn.nanami52.warehouse.requestEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("分页参数模型")
public class PageParams {
    @ApiModelProperty(value = "当前页码（默认1）")
    private Integer pageNo = 1;
    @ApiModelProperty("页面容量（默认10）")
    private Integer pageSize = 10;

    public Integer getPageNo() {
        return pageNo;
    }

    public void setPageNo(Integer pageNo) {
        this.pageNo = pageNo;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}
