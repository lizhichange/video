package com.ruoyi.web.controller.system;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.google.common.base.Predicate;
import com.google.common.base.Splitter;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.framework.util.ShiroUtils;
import com.ruoyi.reward.domain.Shipin;
import com.ruoyi.reward.domain.SysCategory;
import com.ruoyi.reward.facade.api.ShipinFacade;
import com.ruoyi.reward.facade.dto.ShipinDTO;
import com.ruoyi.reward.facade.dto.SysCategoryDTO;
import com.ruoyi.reward.facade.enums.OrderStatusType;
import com.ruoyi.reward.service.ShipinService;
import com.ruoyi.reward.service.SysCategoryService;
import com.ruoyi.system.domain.ExtSysOrder;
import com.ruoyi.system.domain.SysConfig;
import com.ruoyi.system.domain.SysRole;
import com.ruoyi.system.domain.SysUser;
import com.ruoyi.system.service.ISysConfigService;
import com.ruoyi.system.service.ISysOrderService;
import com.ruoyi.web.param.PriceParam;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;


/**
 * 公共片库Controller
 *
 * @author ruoyi
 * @date 2020-03-17
 */
@Controller
@RequestMapping("/system/shipin")
public class ShipinController extends BaseController {
    private String prefix = "system/shipin";

    @Autowired
    private ShipinFacade shipinFacade;
    @Autowired

    ShipinService shipinService;


    @Autowired
    SysCategoryService sysCategoryService;

    @Autowired
    ISysOrderService sysOrderService;

    @RequiresPermissions("system:shipin:view")
    @GetMapping()
    public String shipin() {
        return prefix + "/shipin";
    }

    /**
     * 私人片库
     *
     * @return
     */
    @GetMapping("/pshipin")
    public String pshipin() {
        return prefix + "/pshipin";
    }


    /**
     * 查询公共片库列表
     */
    @RequiresPermissions("system:shipin:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(Shipin shipin) {
        startPage();
        if (!"admin".equals(ShiroUtils.getLoginName())) {
            shipin.setUseridList(Lists.newArrayList("admin", ShiroUtils.getLoginName()));
        }
        List<Shipin> list = shipinService.selectShipinList(shipin);
        if (!CollectionUtils.isEmpty(list)) {
            for (Shipin item : list) {
                ExtSysOrder extSysOrder = new ExtSysOrder();
                extSysOrder.setGoodsId(item.getId());
                extSysOrder.setStatus(Integer.valueOf(OrderStatusType.Y_PAY.getCode()));
                long count = sysOrderService.countByExample(extSysOrder);
                item.setCs(String.valueOf(count));
            }
        }

        return getDataTable(list);
    }

    /**
     * 导出公共片库列表
     */
    @RequiresPermissions("system:shipin:export")
    @PostMapping("/export")
    @RequiresRoles("admin")
    @ResponseBody
    public AjaxResult export(Shipin shipin) {
        List<Shipin> list = shipinService.selectShipinList(shipin);
        ExcelUtil<Shipin> util = new ExcelUtil<>(Shipin.class);
        return util.exportExcel(list, "shipin");
    }

    /**
     * 新增公共片库
     */
    @GetMapping("/add")
    @RequiresPermissions("system:shipin:add")
    @RequiresRoles("admin")
    public String add() {
        return prefix + "/add";
    }

    @Autowired
    RestTemplate restTemplate;

    /**
     * 新增保存公共片库
     */
    @RequiresPermissions("system:shipin:add")
    @RequiresRoles("admin")
    @Log(title = "公共片库", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(ShipinDTO shipin) {
        String loginName = ShiroUtils.getLoginName();
        shipin.setUserid(loginName);
        shipin.setClick(0);
        shipin.setCreateTime(new Date());
        shipin.setMoney(shipin.getStartMoney() + "-" + shipin.getEndMoney());
        return toAjax(shipinFacade.insertShipinDTO(shipin));
    }

    @Autowired
    ISysConfigService sysConfigService;


    @Log(title = "批量发布价格", businessType = BusinessType.INSERT)
    @PostMapping("/batchForceLogout")
    @ResponseBody
    public AjaxResult batchForceLogout(PriceParam param, @RequestParam("ids[]") String[] ids) {
        logger.info("param:{},ids:{}", param, ids);
        String loginName = ShiroUtils.getLoginName();
        SysConfig item = sysConfigService.queryConfigByKey(loginName);
        if (item == null) {
            SysConfig config = new SysConfig();
            config.setConfigKey(loginName);
            Map<String, Object> map = Maps.newHashMap();
            map.put("main", param.getPrice());
            config.setConfigValue(JSONObject.toJSONString(map));
            config.setConfigType("N");
            config.setCreateBy(loginName);
            config.setConfigName("视频自定义私人价格");
            config.setCreateTime(new Date());
            return toAjax(sysConfigService.insertConfig(config));
        } else {
            Long configId = item.getConfigId();
            SysConfig config = new SysConfig();
            config.setConfigId(configId);
            String configValue = config.getConfigValue();
            if (StringUtils.isNotBlank(configValue)) {
                Map<String, Object> valueMap = JSONObject.parseObject(configValue, Map.class);
                ArrayList<PriceParam> newArrayList = Lists.newArrayList();
                if (valueMap.containsKey("item")) {
                    List<PriceParam> itemList = (List<PriceParam>) valueMap.get("item");
                    if (!ArrayUtils.isEmpty(ids)) {
                        for (String id : ids) {
                            Stream<PriceParam> stream = itemList.stream().filter((Predicate<PriceParam>) it -> it.getId().equals(id));
                            //不为空
                            if (stream.findFirst().isPresent()) {
                                //modify
                                PriceParam priceParam = stream.findFirst().get();
                                priceParam.setPrice(param.getPrice());
                                newArrayList.add(priceParam);
                                //原集合remove
                                itemList.remove(priceParam);
                            } else {
                                //add
                                PriceParam priceParam = new PriceParam();
                                priceParam.setPrice(priceParam.getPrice());
                                priceParam.setId(id);
                                newArrayList.add(priceParam);
                            }
                        }
                        newArrayList.addAll(itemList);
                        valueMap.put("item", newArrayList);
                    }
                }

                config.setConfigValue(JSONArray.toJSONString(valueMap));
            }
// 23 24       88 99 23 22   23 m  24 i

            config.setUpdateTime(new Date());
            return toAjax(sysConfigService.updateConfig(config));

        }

    }

    @Log(title = "一键发布价格", businessType = BusinessType.INSERT)
    @PostMapping("/price")
    @ResponseBody
    public AjaxResult price(PriceParam param) {
        String loginName = ShiroUtils.getLoginName();
        SysConfig item = sysConfigService.queryConfigByKey(loginName);
        if (item == null) {
            SysConfig config = new SysConfig();
            config.setConfigKey(loginName);
            Map<String, Object> map = Maps.newHashMap();
            map.put("main", param.getPrice());
            config.setConfigValue(JSONObject.toJSONString(map));
            config.setConfigType("N");
            config.setCreateBy(loginName);
            config.setConfigName("视频自定义私人价格");
            config.setCreateTime(new Date());
            return toAjax(sysConfigService.insertConfig(config));
        } else {
            Long configId = item.getConfigId();
            SysConfig config = new SysConfig();
            config.setConfigId(configId);
            Map<String, Object> map = Maps.newHashMap();
            map.put("main", param.getPrice());
            String configValue = config.getConfigValue();
            if (StringUtils.isNotBlank(configValue)) {
                Map<String, Object> valueMap = JSONObject.parseObject(configValue, Map.class);
                if (valueMap.containsKey("item")) {
                    List<PriceParam> itemList = (List<PriceParam>) valueMap.get("item");
                    map.put("item", itemList);
                }
            }
            config.setConfigValue(JSONArray.toJSONString(map));
            config.setUpdateTime(new Date());
            return toAjax(sysConfigService.updateConfig(config));
        }
    }


    /**
     * 修改公共片库
     */
    @GetMapping("/edit/{id}")
    @RequiresRoles("admin")
    public String edit(@PathVariable("id") Long id, ModelMap mmap) {
        ShipinDTO shipin = shipinFacade.selectShipinDTOById(id);
        String money = shipin.getMoney();
        String[] split = money.split("-");
        shipin.setStartMoney(split[0]);
        shipin.setEndMoney(split[1]);
        mmap.put("shipin", shipin);
        Integer categoryId = shipin.getCategoryId();
        SysCategory sysCategory = sysCategoryService.selectDeptById(categoryId.longValue());
        SysCategoryDTO categoryDTO = new SysCategoryDTO();
        BeanUtils.copyProperties(sysCategory, categoryDTO);
        shipin.setCategory(categoryDTO);

        return prefix + "/edit";
    }

    /**
     * 修改保存公共片库
     */
    @RequiresPermissions("system:shipin:edit")
    @RequiresRoles("admin")
    @Log(title = "公共片库", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(ShipinDTO shipin) {
        shipin.setMoney(shipin.getStartMoney() + "-" + shipin.getEndMoney());
        return toAjax(shipinFacade.updateShipinDTO(shipin));
    }


    /**
     * 删除公共片库
     */
    @RequiresPermissions("system:shipin:remove")
    @RequiresRoles("admin")
    @Log(title = "公共片库", businessType = BusinessType.DELETE)
    @PostMapping("/remove")
    @ResponseBody
    public AjaxResult remove(String ids) {


        SysUser sysUser = ShiroUtils.getSysUser();
        List<SysRole> roles = sysUser.getRoles();
        SysRole sysRole = roles.get(0);
        //如果是管理员。直接删除
        if ("admin".equals(sysRole.getRoleKey())) {
            return toAjax(shipinFacade.deleteShipinDTOByIds(ids));
        }

        if (ids.contains(",")) {
            Iterable<String> split = Splitter.on(',')
                    .trimResults()
                    .omitEmptyStrings().split(ids);
            for (String s : split) {
                if (!xxx(s)) {
                    return error("只能删除自己发布的视频");
                }
                if (!checkOrder(s)) {
                    return error("发布的视频已关联订单");
                }
            }
        } else {
            if (!xxx(ids)) {
                return error("只能删除自己发布的视频");
            }
            if (!checkOrder(ids)) {
                return error("发布的视频已关联订单");
            }
        }
        return toAjax(shipinFacade.deleteShipinDTOByIds(ids));
    }

    private boolean xxx(String s) {
        ShipinDTO item = new ShipinDTO();
        int id = Integer.parseInt(s);
        item.setId(id);
        item.setUserid(ShiroUtils.getLoginName());
        int count = shipinFacade.count(item);
        return count == 0;
    }

    private boolean checkOrder(String s) {
        int id = Integer.parseInt(s);
        ExtSysOrder sysOrder = new ExtSysOrder();
        sysOrder.setGoodsId(id);
        long count = sysOrderService.countByExample(sysOrder);
        return count == 0;
    }

}
