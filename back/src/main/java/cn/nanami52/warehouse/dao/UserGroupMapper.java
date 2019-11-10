package cn.nanami52.warehouse.dao;

import cn.nanami52.warehouse.entity.UserGroup;

public interface UserGroupMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserGroup record);

    int insertSelective(UserGroup record);

    UserGroup selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserGroup record);

    int updateByPrimaryKey(UserGroup record);

    UserGroup[] selectAll();

    UserGroup[] getUserGroupByUserId(String userId);
}