package cn.nanami52.warehouse.dao;

import cn.nanami52.warehouse.entity.WarehouseDetail;

public interface WarehouseDetailMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(WarehouseDetail record);

    int insertSelective(WarehouseDetail record);

    WarehouseDetail selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(WarehouseDetail record);

    int updateByPrimaryKey(WarehouseDetail record);
}