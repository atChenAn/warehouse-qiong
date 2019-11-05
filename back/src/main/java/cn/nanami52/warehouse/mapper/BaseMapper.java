package cn.nanami52.warehouse.mapper;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BaseMapper<T> {
    /**
     * 添加项目
     *
     * @param data
     * @return
     */
    T insert(@Param("data") T data);

    /**
     * 删除项目
     *
     * @param data
     * @return
     */
    int delete(@Param("where") T data);

    /**
     * 更新项目
     *
     * @param data
     * @return
     */
    int update(@Param("where") T where, @Param("data") T data);

    /**
     * 查询项目
     *
     * @param data
     * @return
     */
    List<T> query(@Param("where") T data);
}
