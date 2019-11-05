package cn.nanami52.warehouse.service;

import java.util.List;

public interface BaseService<T> {

    /**
     * 添加项目
     *
     * @param data
     * @return
     */
    T add(T data);

    /**
     * 删除项目
     *
     * @param data
     * @return
     */
    int delect(T data);

    /**
     * 更新项目
     *
     * @param data
     * @return
     */
    int update(T data);

    /**
     * 查询项目列表
     *
     * @param data
     * @return
     */
    List<T> query(T data);

    /**
     * 查询单条项目
     *
     * @param data
     * @return
     */
    T queryOne(T data);
}
