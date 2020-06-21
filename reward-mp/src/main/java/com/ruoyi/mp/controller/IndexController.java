package com.ruoyi.mp.controller;

import cn.hutool.core.util.RandomUtil;
import com.ruoyi.reward.facade.dto.SysWebMainDTO;
import com.ruoyi.reward.facade.enums.WebMainStatus;
import org.near.toolkit.common.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author sunflower
 */
@Controller
public class IndexController extends BaseController {
    private final static Logger LOGGER = LoggerFactory.getLogger(IndexController.class);

    @GetMapping("/")
    public String index(@RequestParam(value = "userid", required = false) String userid,
                        HttpServletRequest request, ModelMap modelMap) {
        String url = request.getScheme() + "://" + request.getServerName() + request.getRequestURI();
        modelMap.put("url", url);
        modelMap.put("userid", userid);
        String desc = sysConfigFacadeClient.selectConfigByKey("share.desc");
        if (StringUtil.isBlank(desc)) {
            desc = "今日更新，拉無人免提";
        }
        String title = sysConfigFacadeClient.selectConfigByKey("share.title");
        if (StringUtil.isBlank(title)) {
            title = "點擊觀看,完整影視";
        }
        modelMap.put("title", title);
        modelMap.put("desc", desc);
        return "index";
    }

    @GetMapping("/index")
    public String render(@RequestParam(value = "userid", required = false) String userid) {
        String user = StringUtil.isBlank(userid) ? "" : userid;
        SysWebMainDTO webMain = new SysWebMainDTO();
        webMain.setMainStatus(WebMainStatus.OK.getCode());
        List<SysWebMainDTO> list = sysWebMainFacadeClient.selectSysWebMainList(webMain);
        if (!CollectionUtils.isEmpty(list)) {
            SysWebMainDTO item;
            int size = list.size();
            if (size == 1) {
                item = list.get(0);
            } else {
                int i = RandomUtil.randomInt(0, size - 1);
                item = list.get(i);
            }
            String url = item.getMainUrl() + "/video/redirect?userid=" + user;
            LOGGER.info("redirect.url:{}", url);
            return "redirect:" + url;
        }
        return "404";
    }
}
