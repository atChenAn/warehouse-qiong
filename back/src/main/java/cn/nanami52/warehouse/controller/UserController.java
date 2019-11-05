package cn.nanami52.warehouse.controller;

import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.requestEntity.UserListGet;
import cn.nanami52.warehouse.service.UserService;
import cn.nanami52.warehouse.utils.CommonUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pagehelper.PageHelper;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(value = "user", tags = "用户管理")
@RestController
@RequestMapping(value = "/user", produces = "application/json;charset=UTF-8")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/list")
    @ApiOperation(value = "获取用户列表信息", notes = "获取用户列表信息", response = User[].class)
    public String get(UserListGet params) {

        PageHelper.startPage(params.getPageNo(), params.getPageSize());
        // 通过参数查询用户列表即可
        User user = new User(params.getId(), params.getUsername(), null, params.getNickName(), null, null);
        List<User> users = this.userService.query(user);
        try {
            return CommonUtils.toJson(users);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "对象序列化失败！";
        }
    }

}
