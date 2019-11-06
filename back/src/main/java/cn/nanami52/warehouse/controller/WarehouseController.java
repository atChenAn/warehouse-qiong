package cn.nanami52.warehouse.controller;

import cn.nanami52.warehouse.responseEntity.ResponseBaseData;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "warehouse", tags = "库存管理")
@RestController
@RequestMapping(value = "/warehouse", produces = "application/json;charset=UTF-8")
public class WarehouseController {

    @GetMapping("/list")
    @ApiOperation(value = "库存盘存单查询", notes = "查询库存BOM盘存数据", response = ResponseBaseData.class)
    public String list() {
        return "";
    }

}
