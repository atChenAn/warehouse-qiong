package cn.nanami52.warehouse.entity;

public class WarehouseDetail {
    private Integer id;

    private Integer warehourseId;

    private String name;

    private Integer date;

    private Integer planCount;

    private String remark;

    private Integer creatTime;

    private Byte isDel;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getWarehourseId() {
        return warehourseId;
    }

    public void setWarehourseId(Integer warehourseId) {
        this.warehourseId = warehourseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getDate() {
        return date;
    }

    public void setDate(Integer date) {
        this.date = date;
    }

    public Integer getPlanCount() {
        return planCount;
    }

    public void setPlanCount(Integer planCount) {
        this.planCount = planCount;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Integer getCreatTime() {
        return creatTime;
    }

    public void setCreatTime(Integer creatTime) {
        this.creatTime = creatTime;
    }

    public Byte getIsDel() {
        return isDel;
    }

    public void setIsDel(Byte isDel) {
        this.isDel = isDel;
    }
}