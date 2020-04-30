package com.ruoyi.web.controller;

import com.ruoyi.web.util.AjaxResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author sunflower
 */
@Controller
@Slf4j
public class LoginController extends BaseController {

    @GetMapping("/reg")
    public String reg(HttpServletRequest request, ModelMap modelMap, HttpServletResponse response) {
        // 如果是Ajax请求，返回Json字符串。
        getCategory(modelMap);
        return "reg";
    }

    @PostMapping("/reg")
    @ResponseBody
    public AjaxResult ajaxReg(String username, String password, Boolean rememberMe) {
        return null;
    }

    @GetMapping("/login")
    public String login(HttpServletRequest request, ModelMap modelMap, HttpServletResponse response) {
        // 如果是Ajax请求，返回Json字符串。
        getCategory(modelMap);
        return "login";
    }

    @PostMapping("/login")
    @ResponseBody
    public AjaxResult ajaxLogin(String username, String password, Boolean rememberMe) {
        return null;
    }

}