package cn.nanami52.warehouse.service;

import cn.nanami52.warehouse.dao.UserAuthMapper;
import cn.nanami52.warehouse.dao.UserMapper;
import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.entity.UserAuth;
import cn.nanami52.warehouse.entity.UserGroup;
import cn.nanami52.warehouse.exception.StandardError;
import cn.nanami52.warehouse.requestEntity.RequestUserAddPost;
import cn.nanami52.warehouse.responseEntity.ResponseError;
import cn.nanami52.warehouse.responseEntity.ResponseUserGet;
import cn.nanami52.warehouse.utils.EncryptionUtils;
import cn.nanami52.warehouse.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements BaseService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private UserAuthMapper userAuthMapper;

    public User add(RequestUserAddPost data) throws Exception {
        String[] groupIds = data.getUserGroup().split(",");
        User user = new User(
                data.getUsername(), data.getPassword(), data.getNickName(), data.getStatus()
        );
        // 添加用户ID
        user.setId(IdUtils.generateId());
        user.setIsDel(Integer.valueOf(0).byteValue());
        // password 加密
        user.setPassword(EncryptionUtils.encodePasswordHash(data.getPassword()));
        //添加创建时间
        user.setCreateTime(System.currentTimeMillis());
        try {
            // 插入用户
            userMapper.insert(user);
            // 插入用户组关联
            for (String groupId :
                    groupIds) {
                UserAuth userAuth = new UserAuth();
                userAuth.setId(IdUtils.generateId());
                userAuth.setUserid(user.getId());
                userAuth.setGroupid(groupId);
                userAuthMapper.insert(userAuth);
            }

        } catch (DuplicateKeyException e) {
            throw new Exception("username重复，请更换后重试");
        }
        user.setPassword(null);
        return user;
    }


    public int delect(User data) {
        int deleteRow = this.userMapper.deleteByPrimaryKey(data.getId());
        this.userAuthMapper.deleteByUserId(data.getId());
        return deleteRow;
    }


    public int update(User data) {
        return 0;
    }


    public List<User> query(User data) {
        return new ArrayList<>();
    }


    public ResponseUserGet queryOne(String id) throws StandardError {
        User user = this.userMapper.selectByPrimaryKey(id);
        if (null == user) {
            throw new StandardError("未查询到用户信息");
        }
        UserAuth[] userAuths = this.userAuthMapper.selectByUserId(id);
        ResponseUserGet responseUserGet = new ResponseUserGet(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getUserAuth(),
                user.getNickName(),
                user.getCreateTime(),
                user.getStatus(),
                user.getIsDel(),
                userAuths);

        return responseUserGet;
    }
}
