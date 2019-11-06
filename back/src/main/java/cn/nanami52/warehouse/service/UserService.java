package cn.nanami52.warehouse.service;

import cn.nanami52.warehouse.dao.UserMapper;
import cn.nanami52.warehouse.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements BaseService<User> {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User add(User data) {
        return null;
    }

    @Override
    public int delect(User data) {
        return 0;
    }

    @Override
    public int update(User data) {
        return 0;
    }

    @Override
    public List<User> query(User data) {
        return new ArrayList<>();
    }

    @Override
    public User queryOne(User data) {
        return this.userMapper.selectByPrimaryKey(data.getId());
    }
}
