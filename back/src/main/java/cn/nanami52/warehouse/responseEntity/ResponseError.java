package cn.nanami52.warehouse.responseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("标准错误对象")
public class ResponseError {

    @ApiModelProperty("错误代码")
    private Integer code;
    @ApiModelProperty("错误信息")
    private String message;

    public ResponseError() {
    }

    public ResponseError(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
