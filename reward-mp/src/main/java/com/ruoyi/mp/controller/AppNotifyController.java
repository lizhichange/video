package com.ruoyi.mp.controller;


import com.alibaba.dubbo.config.annotation.Reference;
import com.ruoyi.mp.config.MpAuthConfig;
import com.ruoyi.mp.param.NotifyLoginParam;
import com.ruoyi.mp.util.AjaxResult;
import com.ruoyi.reward.facade.api.UserDetailFacade;
import com.ruoyi.reward.facade.dto.SysOrderDTO;
import com.ruoyi.reward.facade.dto.UserDto;
import com.ruoyi.reward.facade.request.UserWechatLoginRequest;
import lombok.Data;
import me.chanjar.weixin.common.api.WxConsts;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.result.WxMpOAuth2AccessToken;
import me.chanjar.weixin.mp.bean.result.WxMpUser;
import me.chanjar.weixin.mp.config.WxMpConfigStorage;
import org.near.toolkit.model.ToString;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


/**
 * @author sunflower
 */
@Controller
@RequestMapping("/notify")
public class AppNotifyController {


    @PostMapping("/notify")
    @ResponseBody
    public Result notify(NotifyLoginParam param,
                         HttpServletRequest servletRequest) {
        Result result = new Result();
        result.setAppid("123");
        result.setToken("123");
        result.setSecret("123");
        result.setWebapp("123");
        return result;


    }

    @Data
    class Result extends ToString {
        private String appid;
        private String token;
        private String secret;
        private String webapp;
    }
}