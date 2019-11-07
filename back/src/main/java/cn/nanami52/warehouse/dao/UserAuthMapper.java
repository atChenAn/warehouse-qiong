package cn.nanami52.warehouse.dao;

import cn.nanami52.warehouse.entity.UserAuth;

public interface UserAuthMapper {
    int deleteByPrimaryKey(String id);

    int deleteByUserId(String userId);

    int insert(UserAuth record);

    int insertSelective(UserAuth record);

    UserAuth selectByPrimaryKey(String id);

    UserAuth[] selectByUserId(String userId);

    int updateByPrimaryKeySelective(UserAuth record);

    int updateByPrimaryKey(UserAuth record);
}