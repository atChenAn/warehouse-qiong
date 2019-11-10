package cn.nanami52.warehouse.service;

import cn.nanami52.warehouse.dao.UserAuthMapper;
import cn.nanami52.warehouse.dao.UserGroupMapper;
import cn.nanami52.warehouse.dao.UserMapper;
import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.entity.UserAuth;
import cn.nanami52.warehouse.entity.UserGroup;
import cn.nanami52.warehouse.exception.StandardError;
import cn.nanami52.warehouse.requestEntity.RequestLoginPost;
import cn.nanami52.warehouse.requestEntity.RequestUserAddPost;
import cn.nanami52.warehouse.requestEntity.RequestUserListGet;
import cn.nanami52.warehouse.responseEntity.ResponseUserGet;
import cn.nanami52.warehouse.responseEntity.ResponseUserListGet;
import cn.nanami52.warehouse.utils.CommonUtils;
import cn.nanami52.warehouse.utils.digest.EncryptionUtils;
import cn.nanami52.warehouse.utils.IdUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements BaseService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private UserAuthMapper userAuthMapper;
    @Autowired
    private UserGroupMapper userGroupMapper;

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
        // 更新主表信息
        data.setPassword(EncryptionUtils.encodePasswordHash(data.getPassword()));
        int updateRows = this.userMapper.updateByPrimaryKeySelective(data);
        // 删除用户组关联记录
        this.userAuthMapper.deleteByUserId(data.getId());
        // 插入新的关联记录
        String[] groupIds = data.getGroupId().split(",");
        for (String groupId :
                groupIds) {
            UserAuth userAuth = new UserAuth(IdUtils.generateId(), data.getId(), groupId);
            this.userAuthMapper.insert(userAuth);
        }
        return updateRows;
    }


    public ResponseUserListGet query(RequestUserListGet params) {
        PageHelper.startPage(params.getPageNo(), params.getPageSize());
        List<User> users = this.userMapper.select(params);
        PageInfo<User> userPageInfo = new PageInfo<User>(users);
        cn.nanami52.warehouse.responseEntity.PageInfo pageInfo = CommonUtils.convetPageInfo(userPageInfo);
        ResponseUserListGet responseUserListGet = new ResponseUserListGet();
        responseUserListGet.setMeta(pageInfo);
        responseUserListGet.setData(users);
        return responseUserListGet;
    }

    public User checkLogin(RequestLoginPost params) {
        String hash = EncryptionUtils.encodePasswordHash(params.getPassword());
        return this.userMapper.checkLogin(params.getUsername(), hash);
    }


    public ResponseUserGet queryOne(String id) throws StandardError {
        User user = this.userMapper.selectByPrimaryKey(id);
        user.setPassword(null);
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

    public UserGroup[] getUserGroupByUserId(String userId) {
        return this.userGroupMapper.getUserGroupByUserId(userId);
    }

    public UserGroup[] getUserGroup() {
        return this.userGroupMapper.selectAll();
    }
}
