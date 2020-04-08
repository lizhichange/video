package com.ruoyi.sms.service;

import com.ruoyi.sms.domain.Shipin;

import java.util.List;

public interface IShipinService {
    /**
     * 查询邀请码管理
     *
     * @param id 邀请码管理ID
     * @return 邀请码管理
     */
    public Shipin selectShipinById(Long id);

    /**
     * 查询邀请码管理列表
     *
     * @param shipin 邀请码管理
     * @return 邀请码管理集合
     */
    public List<Shipin> selectShipinList(Shipin shipin);

    /**
     * 新增邀请码管理
     *
     * @param shipin 邀请码管理
     * @return 结果
     */
    public int insertShipin(Shipin shipin);

    /**
     * 修改邀请码管理
     *
     * @param shipin 邀请码管理
     * @return 结果
     */
    public int updateShipin(Shipin shipin);

    /**
     * 批量删除邀请码管理
     *
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteShipinByIds(String ids);

    /**
     * 删除邀请码管理信息
     *
     * @param id 邀请码管理ID
     * @return 结果
     */
    public int deleteShipinById(Long id);
}