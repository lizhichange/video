package com.ruoyi.web.interceptor;


import cn.hutool.core.util.URLUtil;
import com.ruoyi.reward.facade.dto.TsDTO;
import com.ruoyi.web.client.SysConfigFacadeClient;
import com.ruoyi.web.client.TsFacadeClient;
import com.ruoyi.web.config.AppConfig;
import com.ruoyi.web.config.RedisUtil;
import com.ruoyi.web.model.Users;
import com.ruoyi.web.security.SecurityUtil;
import org.near.toolkit.common.DoMainUtil;
import org.near.toolkit.common.StringUtil;
import org.near.toolkit.context.SessionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;


/**
 * 微信预授权拦截器
 *
 * @author ruoyi
 */
@Component
public class WechatAuthInterceptor extends HandlerInterceptorAdapter {
    private final static Logger LOGGER = LoggerFactory.getLogger(WechatAuthInterceptor.class);
    public final static String COOKIE_OP_KEY = "OPEN_INFO_KEY";
    public final static String COOKIE_USER_KEY = "USER_INFO_KEY";


    @Autowired
    AppConfig appConfig;

    @Lazy
    @Autowired
    TsFacadeClient tsFacadeClient;

    @Lazy
    @Autowired
    SysConfigFacadeClient sysConfigFacadeClient;
    @Autowired
    RedisUtil redisUtil;
    @Autowired
    ThreadPoolTaskExecutor threadPoolTaskExecutor;


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        Users currentUser = SecurityUtil.getCurrentUser();
        request.setAttribute("user", currentUser);
        threadPoolTaskExecutor.execute(() -> redisUtil.set("user", currentUser));
        request.setAttribute("authMpEnabled", appConfig.isAuthMpEnabled());
        StringBuffer requestUrl = request.getRequestURL();
        LOGGER.debug("requestURL:{}", requestUrl);
        Map<String, String[]> parameterMap = request.getParameterMap();
        StringBuilder str = new StringBuilder();
        if (!CollectionUtils.isEmpty(parameterMap)) {
            for (Map.Entry<String, String[]> entry : parameterMap.entrySet()) {
                String k = entry.getKey();
                String[] v = entry.getValue();
                String param = k + "=" + v[0];
                str.append(param).append("&");
            }
        }

        String referer = requestUrl.toString() + "?" + str;
        HttpSession session = request.getSession();
        String doMain = DoMainUtil.getDoMain(requestUrl.toString());
        //推广人的userId
        String userId = request.getParameter("userId");
        if (StringUtil.isNotBlank(userId)) {
            write(userId, COOKIE_USER_KEY, doMain, response);
            SessionContext.setUserId(session, userId);
            LOGGER.info("userId:{}", userId);
        }
        userId = read(request, COOKIE_USER_KEY);
        if (StringUtil.isNotBlank(userId)) {
            SessionContext.setUserId(session, userId);
        }

        if (handler instanceof HandlerMethod) {
            HandlerMethod handlerMethod = (HandlerMethod) handler;
            WxPnUserAuth classAnnotation = handlerMethod.getClass().getAnnotation(WxPnUserAuth.class);
            Method method = handlerMethod.getMethod();
            WxPnUserAuth methodAnnotation = method.getAnnotation(WxPnUserAuth.class);
            //如果注解为空说明不需要拦截,直接放过
            if (methodAnnotation == null && classAnnotation == null) {
                return true;
            }
//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx851c20b0d27a586b&redirect_uri=http%3A%2F%2Fauth.grkfcs.cn%2Fwechat%2Fcallback%3Fcallback%3Dhttp%3A%2F%2Fvideo.grkfcs.cn%2Fvideo%2Fdetail%3Fid%3D1%26author%3Dadmin%26&response_type=code&scope=snsapi_userinfo&state=http://video.grkfcs.cn/video/detail?id=1&author=admin&&connect_redirect=1&uin=ODcyMzI5MjA5&key=102f8d481f9ecf886111c94f9f22596e64f5993de3df2a17eb7c1316c7bc429f9ad53e85a0f24163e9c0f7bb3da42e53&pass_ticket=SIaGUmWlaMl5uFHS7cHKoAqKybLVE+h/85B6BRh9U8ItFQaqD7fidGJXOCj4IEYcTctmTRFwY4en0+mgHCBKIA==
            //授权回来之后中定向会带有openId参数
            String openId = request.getParameter("op");
            if (StringUtil.isNotBlank(openId)) {
                write(openId, COOKIE_OP_KEY, doMain, response);
                SessionContext.setOpenId(session, openId);
                return true;
            }

            openId = read(request, COOKIE_OP_KEY);
            LOGGER.info("openId:{}", openId);
            if (StringUtil.isNotBlank(openId)) {
                SessionContext.setOpenId(session, openId);
                return true;
            }
            String wxAuthUrl = sysConfigFacadeClient.selectConfigByKey("wxAuthUrl");
            wxAuthUrl = wxAuthUrl + "/wechat/auth";
            String encode = URIUtil.encodeURIComponent(referer);
            if (wxAuthUrl.contains("?")) {
                wxAuthUrl += "&callback=" + encode;
            } else {
                wxAuthUrl += "?callback=" + encode;
            }
            response.sendRedirect(wxAuthUrl);
            return false;
        } else {
            return super.preHandle(request, response, handler);
        }

    }

    private boolean redirect(HttpServletResponse response, String openId) throws IOException {
        //投诉信息
        TsDTO tsDTO = new TsDTO();
        tsDTO.setOpenId(openId);
        List<TsDTO> list = tsFacadeClient.selectTsList(tsDTO);
        if (!CollectionUtils.isEmpty(list)) {
            String weiXin110 = "https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=20&source=2&url=" + URLUtil.encode("https://www.qq.com/?fromdefault");
            response.sendRedirect(weiXin110);
            return true;
        }
        return false;
    }

    private HttpServletRequest getHttpServletRequest() {
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes my = (ServletRequestAttributes) requestAttributes;
        assert my != null;
        return my.getRequest();
    }


    public static void write(String str, String cookieName, String domain,
                             HttpServletResponse response) {
        Cookie cookie = new Cookie(cookieName, str);
        cookie.setMaxAge(-1);
        cookie.setDomain(domain);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        response.addCookie(cookie);
    }


    /**
     * // 执行目标方法之后执行
     *
     * @param request
     * @param response
     * @param handler
     * @param modelAndView
     */
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) {

    }

    /**
     * 在请求已经返回之后执行
     *
     * @param request
     * @param response
     * @param handler
     * @param ex
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                                Object handler, Exception ex) {

        if (SessionContext.hasAttribute(SessionContext.OPEN_ID_KEY)) {
            SessionContext.removeAttribute(SessionContext.OPEN_ID_KEY);
        }
        if (SessionContext.hasAttribute(SessionContext.USER_ID_KEY)) {
            SessionContext.removeAttribute(SessionContext.USER_ID_KEY);
        }
    }

    /**
     * 根据cookieKey读取cookie
     *
     * @param request   the request
     * @param cookieKey the cookie key
     * @return the string
     */
    public static String read(HttpServletRequest request, String cookieKey) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null) {
            return null;
        }
        for (Cookie c : cookies) {
            if (cookieKey.equals(c.getName())) {
                return c.getValue();
            }
        }
        return null;
    }


}
