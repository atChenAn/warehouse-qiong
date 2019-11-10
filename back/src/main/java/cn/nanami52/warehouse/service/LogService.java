package cn.nanami52.warehouse.service;

import cn.nanami52.warehouse.dao.LogMapper;
import cn.nanami52.warehouse.entity.Log;
import cn.nanami52.warehouse.responseEntity.ResponseLogListGet;
import cn.nanami52.warehouse.utils.CommonUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class LogService implements BaseService {

    @Autowired
    private LogMapper logMapper;

    public ResponseLogListGet query(Map<String, ?> params) {
        PageHelper.startPage((Integer) params.get("pageNo"), (Integer) params.get("pageSize"));
        List<Log> data = this.logMapper.query(params);
        PageInfo<Log> logPageInfo = new PageInfo<>(data);
        cn.nanami52.warehouse.responseEntity.PageInfo pageInfo = CommonUtils.convetPageInfo(logPageInfo);
        return new ResponseLogListGet(null != data ? data : new ArrayList<>(), pageInfo);
    }

    public void clear() {
        this.logMapper.clear();
    }

}
