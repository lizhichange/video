package com.ruoyi.reward.facade;


import com.alibaba.dubbo.config.annotation.Service;
import com.ruoyi.common.core.text.Convert;
import com.ruoyi.reward.domain.Complaint;
import com.ruoyi.reward.domain.ComplaintExample;
import com.ruoyi.reward.facade.api.ComplaintFacade;
import com.ruoyi.reward.facade.dto.ComplaintDTO;
import com.ruoyi.reward.mapper.ExtComplaintMapper;
import com.ruoyi.reward.mapper.ComplaintMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;


/**
 * 投诉列表Service业务层处理
 *
 * @author ruoyi
 * @date 2020-03-16
 */
@Service(
        version = "1.0.0",
        timeout = 15000
)
public class ComplaintFacadeImpl implements ComplaintFacade {
    @Autowired
    private ExtComplaintMapper extComplaintMapper;


    @Autowired
    private ComplaintMapper complaintMapper;

    /**
     * 查询投诉列表
     *
     * @param id 投诉列表ID
     * @return 投诉列表
     */
    @Override
    public ComplaintDTO selectTsById(Long id) {


        return convert(extComplaintMapper.selectTsById(id));
    }

    private ComplaintDTO convert(Complaint item) {
        if (item == null) {
            return null;
        }
        ComplaintDTO dto = new ComplaintDTO();
        BeanUtils.copyProperties(item, dto);
        return dto;
    }


    /**
     * 查询投诉列表列表
     *
     * @param ts 投诉列表
     * @return 投诉列表
     */
    @Override
    public List<ComplaintDTO> selectTsList(ComplaintDTO ts) {
        Complaint item = new Complaint();
        BeanUtils.copyProperties(ts, item);
        List<Complaint> list = extComplaintMapper.selectTsList(item);
        return list.stream().map(this::convert).collect(Collectors.toList());
    }

    /**
     * 新增投诉列表
     *
     * @param ts 投诉列表
     * @return 结果
     */
    @Override
    public int insertTs(ComplaintDTO ts) {
        Complaint item = new Complaint();
        BeanUtils.copyProperties(ts, item);
        return extComplaintMapper.insertTs(item);
    }

    /**
     * 修改投诉列表
     *
     * @param ts 投诉列表
     * @return 结果
     */
    @Override
    public int updateTs(ComplaintDTO ts) {
        Complaint item = new Complaint();
        BeanUtils.copyProperties(ts, item);
        return extComplaintMapper.updateTs(item);
    }

    /**
     * 删除投诉列表对象
     *
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    @Override
    public int deleteTsByIds(String ids) {
        return extComplaintMapper.deleteTsByIds(Convert.toStrArray(ids));
    }

    @Override
    public int count() {
        return (int) complaintMapper.countByExample(new ComplaintExample());
    }

    /**
     * 删除投诉列表信息
     *
     * @param id 投诉列表ID
     * @return 结果
     */
    @Override
    public int deleteTsById(Long id) {
        return extComplaintMapper.deleteTsById(id);
    }

}
