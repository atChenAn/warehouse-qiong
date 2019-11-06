package cn.nanami52.warehouse.dao;

import cn.nanami52.warehouse.entity.BomCode;

public interface BomCodeMapper {
    int deleteByPrimaryKey(Long id);

    int insert(BomCode record);

    int insertSelective(BomCode record);

    BomCode selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(BomCode record);

    int updateByPrimaryKey(BomCode record);
}