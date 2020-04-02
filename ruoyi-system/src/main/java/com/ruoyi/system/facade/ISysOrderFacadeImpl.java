package com.ruoyi.system.facade;

import com.alibaba.dubbo.config.annotation.Service;
import com.google.common.collect.Lists;
import com.ruoyi.sms.facade.ISysOrderFacade;
import com.ruoyi.sms.facade.dto.SysOrderDTO;
import com.ruoyi.sms.facade.enums.OrderStatusType;
import com.ruoyi.system.domain.SysOrder;
import com.ruoyi.system.domain.ext.ExtSysOrder;
import com.ruoyi.system.domain.ext.SysOrderExample;
import com.ruoyi.system.mapper.ExtSysOrderMapper;
import com.ruoyi.system.service.ISysOrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author sunflower
 */
@Service(
        version = "1.0.0",
        timeout = 15000
)
@Slf4j
public class ISysOrderFacadeImpl implements ISysOrderFacade {

    @Autowired
    ISysOrderService sysOrderService;

    @Autowired
    ExtSysOrderMapper extSysOrderMapper;

    @Override
    public SysOrderDTO selectSysOrderById(Long id) {
        return null;
    }

    @Override
    public List<SysOrderDTO> selectSysOrderList(SysOrderDTO sysOrder) {
        SysOrder item = new SysOrder();
        BeanUtils.copyProperties(sysOrder, item);
        List<SysOrder> list = sysOrderService.selectSysOrderList(item);

        if (CollectionUtils.isEmpty(list)) {
            return Lists.newArrayList();
        }

        return list.stream().map(it ->
        {
            SysOrderDTO dto = new SysOrderDTO();
            BeanUtils.copyProperties(it, dto);
            return dto;
        }).collect(Collectors.toList());
    }

    @Override
    public List<SysOrderDTO> selectSysOrderListExt(SysOrderDTO sysOrder) {

        SysOrderExample example = new SysOrderExample();

        example.setOffset(sysOrder.getOffset());
        example.setLimit(sysOrder.getLimit());

        SysOrderExample.Criteria criteria = example.createCriteria();

        criteria.andStatusEqualTo(Integer.valueOf(OrderStatusType.PAY_ING.getCode()));
        List<ExtSysOrder> list = extSysOrderMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(list)) {
            return Lists.newArrayList();
        }

        return list.stream().map(it ->
        {
            SysOrderDTO dto = new SysOrderDTO();
            BeanUtils.copyProperties(it, dto);
            return dto;
        }).collect(Collectors.toList());

    }

    @Override
    public int insertSysOrder(SysOrderDTO sysOrder) {
        return 0;
    }

    @Override
    public int updateSysOrder(SysOrderDTO sysOrder) {
        SysOrder item = new SysOrder();
        BeanUtils.copyProperties(sysOrder, item);
        return sysOrderService.updateSysOrder(item);
    }

    @Override
    public int updateSysOrderByOrderId(SysOrderDTO sysOrder) {
        SysOrder item = new SysOrder();
        BeanUtils.copyProperties(sysOrder, item);
        return sysOrderService.updateSysOrderByOrderId(item);
    }

    @Override
    public int deleteSysOrderByIds(String ids) {
        return 0;
    }

    @Override
    public int deleteSysOrderById(Long id) {
        return 0;
    }
}
