package cn.nanami52.warehouse.controller;

import cn.nanami52.warehouse.requestEntity.RequestLoginPost;
import cn.nanami52.warehouse.requestEntity.RequestMeGet;
import cn.nanami52.warehouse.responseEntity.ResponseBaseData;
import cn.nanami52.warehouse.responseEntity.ResponseLoginPost;
import cn.nanami52.warehouse.responseEntity.ResponseMeGet;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/login", produces = "application/json;charset=UTF-8")
@Api(value = "login", tags = "登陆")
public class LoginController {

    @PostMapping("/login")
    @ApiOperation(value = "登陆", notes = "登陆操作，取得用户信息，以及token", response = ResponseLoginPost.class)
    public String login(@ApiParam("用户登陆信息") @RequestBody RequestLoginPost parma) {
        return "";
    }

    @GetMapping("/me")
    @ApiOperation(value = "获取用户信息", notes = "获取用户信息", response = ResponseMeGet.class)
    public String me(RequestMeGet params) {
        return "";
    }

    @DeleteMapping("/logout")
    @ApiOperation(value = "退出登录", notes = "退出登录", response = ResponseBaseData.class)
    public String logout() {
        return "";
    }
}
