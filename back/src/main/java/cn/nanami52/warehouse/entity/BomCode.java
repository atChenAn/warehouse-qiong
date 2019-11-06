package cn.nanami52.warehouse.entity;

public class BomCode {
    private Long id;

    private String bomCode;

    private String bomName;

    private Integer status;

    private Byte isDel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBomCode() {
        return bomCode;
    }

    public void setBomCode(String bomCode) {
        this.bomCode = bomCode == null ? null : bomCode.trim();
    }

    public String getBomName() {
        return bomName;
    }

    public void setBomName(String bomName) {
        this.bomName = bomName == null ? null : bomName.trim();
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