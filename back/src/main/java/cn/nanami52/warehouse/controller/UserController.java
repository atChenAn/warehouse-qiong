package cn.nanami52.warehouse.controller;

import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.entity.UserGroup;
import cn.nanami52.warehouse.exception.StandardError;
import cn.nanami52.warehouse.myEnum.HttpResponseCode;
import cn.nanami52.warehouse.requestEntity.RequestUserListGet;
import cn.nanami52.warehouse.requestEntity.RequestUserAddPost;
import cn.nanami52.warehouse.requestEntity.RequestUserUpdatePatch;
import cn.nanami52.warehouse.responseEntity.ResponseBaseData;
import cn.nanami52.warehouse.responseEntity.ResponseError;
import cn.nanami52.warehouse.responseEntity.ResponseUserGet;
import cn.nanami52.warehouse.responseEntity.ResponseUserListGet;
import cn.nanami52.warehouse.service.UserService;
import cn.nanami52.warehouse.utils.CommonUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Api(value = "user", tags = "用户管理")
@RestController
@RequestMapping(value = "/user", produces = "application/json;charset=UTF-8")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/list")
    @ApiOperation(value = "获取用户列表信息", notes = "获取用户列表信息", response = ResponseUserListGet.class)
    public ResponseUserListGet get(RequestUserListGet params) {
        return this.userService.query(params);
    }

    @GetMapping("/get/{id}")
    @ApiOperation(value = "获取用户详细信息", notes = "获取用户详细信息", response = ResponseUserGet.class)
    @Validated
    public ResponseUserGet get(@ApiParam(value = "用户id", required = true) @PathVariable("id") String id) throws StandardError {
        ResponseUserGet responseUserGet = this.userService.queryOne(id);
        if (null != responseUserGet) {
            return responseUserGet;
        }
        throw new StandardError("未找到相关用户信息");
    }

    @Transactional
    @PostMapping("/add")
    @ApiOperation(value = "添加用户", notes = "添加用户", response = User.class)
    public User add(@ApiParam("用户信息") @Validated @RequestBody RequestUserAddPost params) throws Exception {
        return this.userService.add(params);
    }


    @PostMapping("/import")
    @ApiOperation(value = "批量导入用户列表[暂未实现]",
            notes = "Excel批量导入用户列表，请按要求进行导入，如果存在无效数据，将导致该次导入全部失败",
            response = ResponseBaseData.class)
    public String imports(@ApiParam(value = "用户信息Excel", required = true) @RequestParam("file") MultipartFile file) {
        System.out.println("getContentType:" + file.getContentType());
        System.out.println("size:" + file.getSize());
        System.out.println("fileName:" + file.getOriginalFilename());
        return "222";
    }

    @PatchMapping("/update/{id}")
    @ApiOperation(value = "修改用户信息",
            notes = "修改用户的相关信息，id必传",
            response = ResponseBaseData.class
    )
    public ResponseBaseData update(@ApiParam(value = "用户id", required = true) @PathVariable(value = "id", required = true) String id,
                                   @ApiParam("用户信息") @RequestBody RequestUserUpdatePatch param) throws StandardError {
        User user = new User();
        user.setId(id);
        user.setNickName(param.getNickName());
        user.setPassword(param.getPassword());
        user.setGroupId(param.getUserGroup());
        user.setStatus(param.getStatus());
        int updateRows = this.userService.update(user);
        if (updateRows > 0) {
            ResponseBaseData responseBaseData = new ResponseBaseData();
            responseBaseData.setMessage("修改成功");
            return responseBaseData;
        }
        throw new StandardError("修改用户信息失败，未找到相应的用户数据");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除用户信息",
            notes = "删除用户信息（逻辑）",
            response = ResponseError.class
    )
    public ResponseError delete(@ApiParam(value = "用户id", required = true) @PathVariable("id") String id) {
        User user = new User();
        user.setId(id);
        int delectRow = this.userService.delect(user);
        if (delectRow > 0) {
            return new ResponseError(0, "删除成功");
        }
        return new ResponseError(HttpResponseCode.ERROR_REQUEST_400, "未找相关数据");
    }

    @GetMapping("/group/list")
    @ApiOperation(value = "获取用户组",
            notes = "获取用户组",
            response = UserGroup[].class
    )
    public UserGroup[] groupList() {
        return this.userService.getUserGroup();
    }
}
