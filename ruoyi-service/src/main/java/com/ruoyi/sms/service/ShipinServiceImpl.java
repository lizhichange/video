package com.ruoyi.sms.service;

import com.alibaba.dubbo.config.annotation.Service;
import com.ruoyi.common.core.text.Convert;
import com.ruoyi.sms.domain.Shipin;
import com.ruoyi.sms.domain.ShipinExample;
import com.ruoyi.sms.facade.api.IShipinService;
import com.ruoyi.sms.facade.dto.ShipinDTO;
import com.ruoyi.sms.mapper.ExtShipinMapper;
import com.ruoyi.sms.mapper.ShipinMapper;
import org.near.toolkit.common.StringUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;


/**
 * 公共片库Service业务层处理
 *
 * @author ruoyi
 * @date 2020-03-17
 */
@Service(
        version = "1.0.0",
        timeout = 15000
)
public class ShipinServiceImpl implements IShipinService {
    @Autowired
    private ShipinMapper shipinMapper;
    @Autowired
    private ExtShipinMapper extShipinMapper;

    /**
     * 查询公共片库
     *
     * @param id 公共片库ID
     * @return 公共片库
     */
    @Override
    public ShipinDTO selectShipinDTOById(Long id) {
        Shipin shipin = extShipinMapper.selectShipinById(id);
        return convert(shipin);

    }

    @Override
    public int updateClickPlus(Long id) {
        return extShipinMapper.updateClickPlus(id);
    }

    private ShipinDTO convert(Shipin shipin) {
        if (shipin == null) {
            return null;
        }
        ShipinDTO dto = new ShipinDTO();
        BeanUtils.copyProperties(shipin, dto);
        return dto;
    }

    /**
     * 查询公共片库列表
     *
     * @param item 公共片库
     * @return 公共片库
     */
    @Override
    public List<ShipinDTO> selectShipinDTOList(ShipinDTO item) {
        Shipin it = new Shipin();
        BeanUtils.copyProperties(item, it);


        List<Shipin> list = extShipinMapper.selectShipinList(it);

        return list.stream().map(this::convert).collect(Collectors.toList());

    }

    @Override
    public int count(ShipinDTO item) {
        ShipinExample example = new ShipinExample();
        ShipinExample.Criteria criteria = example.createCriteria();
        if (item.getId() != null) {
            criteria.andIdEqualTo(item.getId());
        }
        if (StringUtil.isNotBlank(item.getUserid())) {
            criteria.andUseridEqualTo(item.getUserid());
        }
        long l = shipinMapper.countByExample(example);
        return (int) l;
    }

    /**
     * 新增公共片库
     *
     * @param item 公共片库
     * @return 结果
     */
    @Override
    public int insertShipinDTO(ShipinDTO item) {
        Shipin it = new Shipin();
        BeanUtils.copyProperties(item, it);

        return extShipinMapper.insertShipin(it);
    }

    /**
     * 修改公共片库
     *
     * @param item 公共片库
     * @return 结果
     */
    @Override
    public int updateShipinDTO(ShipinDTO item) {
        Shipin it = new Shipin();
        BeanUtils.copyProperties(item, it);
        return extShipinMapper.updateShipin(it);
    }

    /**
     * 删除公共片库对象
     *
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    @Override
    public int deleteShipinDTOByIds(String ids) {
        return extShipinMapper.deleteShipinByIds(Convert.toStrArray(ids));
    }

    /**
     * 删除公共片库信息
     *
     * @param id 公共片库ID
     * @return 结果
     */
    @Override
    public int deleteShipinDTOById(Long id) {
        return extShipinMapper.deleteShipinById(id);
    }
}
