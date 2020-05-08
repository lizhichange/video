package com.ruoyi.web.security;

import com.google.gson.Gson;
import com.ruoyi.web.util.AjaxResult;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author sunflower
 */
@Component
public class UnauthorizedEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        if (isAjaxRequest(request)) {
            // response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
            String msg = "未登录或登录超时。请重新登录";
            AjaxResult error = AjaxResult.error(msg);
            //包装成Json 发送的前台
            String json = new Gson().toJson(error);
            response.setContentType("application/json;charset=utf-8");
            PrintWriter out = response.getWriter();
            out.write(json);
            out.flush();
            out.close();
        } else {
            response.sendRedirect("/login.html");
        }

    }

    public static boolean isAjaxRequest(HttpServletRequest request) {
        String ajaxFlag = request.getHeader("X-Requested-With");
        return "XMLHttpRequest".equals(ajaxFlag);
    }
}