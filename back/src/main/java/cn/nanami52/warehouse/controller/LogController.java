package cn.nanami52.warehouse.controller;

import cn.nanami52.warehouse.entity.Log;
import cn.nanami52.warehouse.requestEntity.RequestLogListGet;
import cn.nanami52.warehouse.responseEntity.ResponseBaseData;
import cn.nanami52.warehouse.responseEntity.ResponseError;
import cn.nanami52.warehouse.responseEntity.ResponseLogListGet;
import cn.nanami52.warehouse.service.LogService;
import cn.nanami52.warehouse.utils.CommonUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.github.pagehelper.PageHelper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Api(value = "log", tags = "日志管理")
@RestController
@RequestMapping(value = "/log", produces = "application/json;charset=UTF-8")
public class LogController {

    @Autowired
    private LogService logService;

    @GetMapping("/list")
    @ApiOperation(value = "日志查询", notes = "查询日志列表数据", response = ResponseLogListGet.class)
    public ResponseLogListGet list(RequestLogListGet params) throws JsonProcessingException {
        Map<String, String> paramsMap = CommonUtils.jsonToMap(CommonUtils.toJson(params));
        return this.logService.query(paramsMap);
    }

    @DeleteMapping("/clear")
    @ApiOperation(value = "日志清理", notes = "清理日志数据", response = ResponseBaseData.class)
    public ResponseError clear() {
        this.logService.clear();
        return new ResponseError(0, "日志清除成功");
    }

}
