package cn.nanami52.warehouse.controller;

import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.exception.NoLoginException;
import cn.nanami52.warehouse.exception.StandardError;
import cn.nanami52.warehouse.requestEntity.RequestLoginPost;
import cn.nanami52.warehouse.requestEntity.RequestMeGet;
import cn.nanami52.warehouse.responseEntity.*;
import cn.nanami52.warehouse.service.UserService;
import cn.nanami52.warehouse.utils.TokenUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;


@RestController
@RequestMapping(value = "/login", produces = "application/json;charset=UTF-8")
@Api(value = "login", tags = "登陆")
public class LoginController {

    @Autowired
    private UserService userService;
    @Value("${custom.loginTimeOut}")
    private Integer loginTimeOut;

    @PostMapping("/login")
    @ApiOperation(value = "登陆", notes = "登陆操作，取得用户信息，以及token", response = ResponseLoginPost.class)
    public Object login(@ApiParam("用户登陆信息") @RequestBody RequestLoginPost parma, HttpServletResponse response) {
        // 查一下用户名密码，生成token写入cookie
        User user = this.userService.checkLogin(parma);
        if (null != user) {
            response.addCookie(new Cookie("Authorization", TokenUtils.createUserToken(user, loginTimeOut)));
            return user;
        } else {
            return new ResponseError(500, "账号或密码错误");
        }
    }

    @GetMapping("/me")
    @ApiOperation(value = "获取用户信息", notes = "获取用户信息", response = ResponseMeGet.class)
    public ResponseMeGet me(HttpServletRequest request) throws NoLoginException, StandardError {
        Cookie[] cookies = request.getCookies();
        if (null != cookies) {
            for (Cookie cookie :
                    cookies) {
                if ("Authorization".equals(cookie.getName())) {
                    String value = cookie.getValue();
                    Map<String, String> userMap = TokenUtils.resolveToken(value);
                    String id = userMap.get("id");
                    ResponseUserGet responseUserGet = this.userService.queryOne(id);
                    ResponseMeGet responseMeGet = new ResponseMeGet();
                    responseMeGet.setId(responseUserGet.getId());
                    responseMeGet.setNickName(responseUserGet.getNickName());
                    responseMeGet.setState(responseUserGet.getStatus());
                    responseMeGet.setUserName(responseUserGet.getUsername());
                    return responseMeGet;
                }
            }
        }

        throw new NoLoginException();
    }

    @DeleteMapping("/logout")
    @ApiOperation(value = "退出登录", notes = "退出登录", response = ResponseBaseData.class)
    public ResponseBaseData logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("Authorization", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        ResponseBaseData responseBaseData = new ResponseBaseData();
        responseBaseData.setData("退出登陆成功");
        return responseBaseData;
    }
}
