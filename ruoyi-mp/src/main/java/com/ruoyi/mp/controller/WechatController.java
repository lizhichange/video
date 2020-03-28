package com.ruoyi.mp.controller;


import com.github.binarywang.wxpay.bean.request.WxPayUnifiedOrderRequest;
import com.github.binarywang.wxpay.exception.WxPayException;
import com.github.binarywang.wxpay.service.WxPayService;
import com.ruoyi.mp.config.MpAuthConfig;
import me.chanjar.weixin.common.api.WxConsts;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.result.WxMpOAuth2AccessToken;
import me.chanjar.weixin.mp.bean.result.WxMpUser;
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
@RequestMapping("/wechat")
public class WechatController {

    private static final Logger LOGGER = LoggerFactory.getLogger(WechatController.class);
    @Autowired
    WxMpService wxMpService;
    @Autowired
    WxPayService wxPayService;

    @GetMapping("/auth")
    public String auth(HttpServletRequest request) {
        String callback = request.getParameter("callback");
        //预授权回调地址
        String url = MpAuthConfig.getWxPnCallbackUrl();
        LOGGER.info("auth.callback:{}", callback);
        if (url.contains("?")) {
            url += "&callback=" + callback;
        } else {
            url += "?callback=" + callback;
        }
        //执行预授权
        String authorizationUrl = wxMpService.oauth2buildAuthorizationUrl(url, WxConsts.OAuth2Scope.SNSAPI_USERINFO, callback);
        //重定向跳转
        return "redirect:" + authorizationUrl;
    }

    @GetMapping("/callback")
    public String callback(@RequestParam("code") String code, @RequestParam("callback") String callback, @RequestParam("state") String state) throws WxErrorException {
        LOGGER.info("callback.code:{},state:{},callback:{}", code, state, callback);
        WxMpOAuth2AccessToken accessToken = wxMpService.oauth2getAccessToken(code);
        if (accessToken != null) {
            //用户信息
            WxMpUser wxMpUser = wxMpService.oauth2getUserInfo(accessToken, null);
            if (callback.contains("?")) {
                callback += "&op=" + wxMpUser.getOpenId();
            } else {
                callback += "?op=" + wxMpUser.getOpenId();
            }
            LOGGER.info("callback.redirect:{}", callback);
            return "redirect:" + callback;
        }
        return "redirect:";
    }


    /**
     * 调用统一下单接口，并组装生成支付所需参数对象.
     *
     * @param request 统一下单请求参数
     * @param <T>     请使用{@link com.github.binarywang.wxpay.bean.order}包下的类
     * @return 返回 {@link com.github.binarywang.wxpay.bean.order}包下的类对象
     */
    @PostMapping("/createOrder")
    public <T> T createOrder(@RequestBody WxPayUnifiedOrderRequest request) throws WxPayException {
        return this.wxPayService.createOrder(request);
    }


}