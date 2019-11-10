package cn.nanami52.warehouse.controller;

import cn.nanami52.warehouse.responseEntity.ResponseBaseData;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

@Api(value = "warehouse", tags = "库存管理")
@RestController
@RequestMapping(value = "/warehouse", produces = "application/json;charset=UTF-8")
public class WarehouseController {

    @GetMapping("/list")
    @ApiOperation(value = "库存盘存单查询", notes = "查询库存BOM盘存数据", response = ResponseBaseData.class)
    public String list() {
        return "";
    }

    @GetMapping("/export")
    @ApiOperation(value = "库存盘存单导出", notes = "导出库存BOM盘存数据", response = OutputStream.class)
    public String export(HttpServletResponse response) throws IOException {
        // response.setContentType("application/x-download");
        // response.addHeader("Content-Disposition", "attachment;filename=test.txt");
        response.getWriter().println("success");
        return "";
    }

    @PostMapping("/add")
    @ApiOperation(value = "库存盘存单添加", notes = "添加库存BOM盘存与PM数据", response = ResponseBaseData.class)
    public String addWarehouse(@ApiParam(value = "BOM盘存与PM数据", required = true) @RequestParam("file") MultipartFile file) {
        return "";
    }

    @PostMapping("/import")
    @ApiOperation(value = "库存盘存单导入", notes = "导入库存BOM盘存与PM数据，注意：这将覆盖已有的现存数据，请谨慎操作", response = ResponseBaseData.class)
    public String importWarehouse(@ApiParam(value = "BOM盘存与PM Excel", required = true) @RequestParam("file") MultipartFile file) {
        return "";
    }

    @PatchMapping("/update")
    @ApiOperation(value = "修改盘存与PM数据", notes = "修改盘存以及PM数据，系统会根据相关数据计算PM差额", response = ResponseBaseData.class)
    public String update(@ApiParam(value = "库存盘存与PM数据", required = true) @RequestBody Object params) {
        return "";
    }

    @DeleteMapping("/delete")
    @ApiOperation(value = "库存盘存单删除", notes = "库存盘存单删除", response = ResponseBaseData.class)
    public String delete(@ApiParam("盘存单ID") @RequestParam(required = true) String id) {
        return "";
    }

}
