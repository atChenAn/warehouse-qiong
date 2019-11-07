package cn.nanami52.warehouse.controller;

import cn.nanami52.warehouse.requestEntity.RequestLogListGet;
import cn.nanami52.warehouse.responseEntity.ResponseBaseData;
import cn.nanami52.warehouse.responseEntity.ResponseLogListGet;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "log", tags = "日志管理")
@RestController
@RequestMapping(value = "/log", produces = "application/json;charset=UTF-8")
public class LogController {

    @GetMapping("/list")
    @ApiOperation(value = "日志查询", notes = "查询日志列表数据", response = ResponseLogListGet.class)
    public String list(RequestLogListGet params) {
        return "";
    }

    @DeleteMapping("/clear")
    @ApiOperation(value = "日志清理", notes = "清理日志数据", response = ResponseBaseData.class)
    public String clear() {
        return "";
    }

}
