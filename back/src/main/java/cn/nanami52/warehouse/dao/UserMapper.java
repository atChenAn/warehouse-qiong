package cn.nanami52.warehouse.dao;

import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.requestEntity.RequestUserListGet;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(String id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    List<User> select(RequestUserListGet params);
}