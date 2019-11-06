package cn.nanami52.warehouse.entity;

public class Warehouse {
    private Integer id;

    private Integer bomId;

    private Integer plannerId;

    private Float repertory;

    private Float planDemand;

    private Integer createTime;

    private Byte isDel;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBomId() {
        return bomId;
    }

    public void setBomId(Integer bomId) {
        this.bomId = bomId;
    }

    public Integer getPlannerId() {
        return plannerId;
    }

    public void setPlannerId(Integer plannerId) {
        this.plannerId = plannerId;
    }

    public Float getRepertory() {
        return repertory;
    }

    public void setRepertory(Float repertory) {
        this.repertory = repertory;
    }

    public Float getPlanDemand() {
        return planDemand;
    }

    public void setPlanDemand(Float planDemand) {
        this.planDemand = planDemand;
    }

    public Integer getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Integer createTime) {
        this.createTime = createTime;
    }

    public Byte getIsDel() {
        return isDel;
    }

    public void setIsDel(Byte isDel) {
        this.isDel = isDel;
    }
}