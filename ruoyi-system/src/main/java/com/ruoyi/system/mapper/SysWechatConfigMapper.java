package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.SysWechatConfig;

/**
 * 公众号配置信息Mapper接口
 * 
 * @author ruoyi
 * @date 2020-03-24
 */
public interface SysWechatConfigMapper 
{
    /**
     * 查询公众号配置信息
     * 
     * @param id 公众号配置信息ID
     * @return 公众号配置信息
     */
    public SysWechatConfig selectSysWechatConfigById(Long id);

    /**
     * 查询公众号配置信息列表
     * 
     * @param sysWechatConfig 公众号配置信息
     * @return 公众号配置信息集合
     */
    public List<SysWechatConfig> selectSysWechatConfigList(SysWechatConfig sysWechatConfig);

    /**
     * 新增公众号配置信息
     * 
     * @param sysWechatConfig 公众号配置信息
     * @return 结果
     */
    public int insertSysWechatConfig(SysWechatConfig sysWechatConfig);

    /**
     * 修改公众号配置信息
     * 
     * @param sysWechatConfig 公众号配置信息
     * @return 结果
     */
    public int updateSysWechatConfig(SysWechatConfig sysWechatConfig);

    /**
     * 删除公众号配置信息
     * 
     * @param id 公众号配置信息ID
     * @return 结果
     */
    public int deleteSysWechatConfigById(Long id);

    /**
     * 批量删除公众号配置信息
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteSysWechatConfigByIds(String[] ids);
}
