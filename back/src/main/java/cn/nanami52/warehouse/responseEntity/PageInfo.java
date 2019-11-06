package cn.nanami52.warehouse.responseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("分页信息")
public class PageInfo {
    @ApiModelProperty("当前页码")
    private Integer pageNo;
    @ApiModelProperty("当前页容量")
    private Integer pageSize;
    @ApiModelProperty("总记录数")
    private Integer count;
    @ApiModelProperty("总页数")
    private Integer pageCount;

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

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Integer getPageCount() {
        return pageCount;
    }

    public void setPageCount(Integer pageCount) {
        this.pageCount = pageCount;
    }
}
