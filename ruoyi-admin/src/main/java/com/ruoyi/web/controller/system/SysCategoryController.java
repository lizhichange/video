package com.ruoyi.web.controller.system;

import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.constant.UserConstants;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.domain.Ztree;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.framework.util.ShiroUtils;

import com.ruoyi.system.domain.SysCategory;
import com.ruoyi.system.domain.SysRole;

import com.ruoyi.system.service.ISysCategoryService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 部门信息
 *
 * @author ruoyi
 */
@Controller
@RequestMapping("/system/category")
public class SysCategoryController extends BaseController {
    private String prefix = "system/category";

    @Autowired
    private ISysCategoryService categoryService;

    @RequiresPermissions("system:category:view")
    @GetMapping()
    public String category() {
        return prefix + "/category";
    }

    @RequiresPermissions("system:category:list")
    @PostMapping("/list")
    @ResponseBody
    public List<SysCategory> list(SysCategory category) {
        return categoryService.selectDeptList(category);
    }

    /**
     * 新增部门
     */
    @GetMapping("/add/{parentId}")
    public String add(@PathVariable("parentId") Long parentId, ModelMap mmap) {
        mmap.put("dept", categoryService.selectDeptById(parentId));
        return prefix + "/add";
    }

    /**
     * 新增保存部门
     */
    @Log(title = "部门管理", businessType = BusinessType.INSERT)
    @RequiresPermissions("system:SysDeptController:add")
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(@Validated SysCategory dept) {
        if (UserConstants.DEPT_NAME_NOT_UNIQUE.equals(categoryService.checkDeptNameUnique(dept))) {
            return error("新增部门'" + dept.getCategoryName() + "'失败，部门名称已存在");
        }
        dept.setCreateBy(ShiroUtils.getLoginName());
        return toAjax(categoryService.insertDept(dept));
    }

    /**
     * 修改
     */
    @GetMapping("/edit/{deptId}")
    public String edit(@PathVariable("deptId") Long deptId, ModelMap mmap) {
        SysCategory dept = categoryService.selectDeptById(deptId);
        if (StringUtils.isNotNull(dept) && 100L == deptId) {
            dept.setParentName("无");
        }
        mmap.put("dept", dept);
        return prefix + "/edit";
    }

    /**
     * 保存
     */
    @Log(title = "部门管理", businessType = BusinessType.UPDATE)
    @RequiresPermissions("system:category:edit")
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(@Validated SysCategory dept) {
        if (UserConstants.DEPT_NAME_NOT_UNIQUE.equals(categoryService.checkDeptNameUnique(dept))) {
            return error("修改部门'" + dept.getCategoryName() + "'失败，部门名称已存在");
        } else if (dept.getParentId().equals(dept.getCategoryId())) {
            return error("修改部门'" + dept.getCategoryName() + "'失败，上级部门不能是自己");
        }
        dept.setUpdateBy(ShiroUtils.getLoginName());
        return toAjax(categoryService.updateDept(dept));
    }

    /**
     * 删除
     */
    @Log(title = "部门管理", businessType = BusinessType.DELETE)
    @RequiresPermissions("system:category:remove")
    @GetMapping("/remove/{deptId}")
    @ResponseBody
    public AjaxResult remove(@PathVariable("deptId") Long deptId) {
        if (categoryService.selectDeptCount(deptId) > 0) {
            return AjaxResult.warn("存在下级部门,不允许删除");
        }
        if (categoryService.checkDeptExistUser(deptId)) {
            return AjaxResult.warn("部门存在用户,不允许删除");
        }
        return toAjax(categoryService.deleteDeptById(deptId));
    }

    /**
     * 校验部门名称
     */
    @PostMapping("/checkDeptNameUnique")
    @ResponseBody
    public String checkDeptNameUnique(SysCategory dept) {
        return categoryService.checkDeptNameUnique(dept);
    }

    /**
     * 选择部门树
     */
    @GetMapping("/selectDeptTree/{deptId}")
    public String selectDeptTree(@PathVariable("deptId") Long deptId, ModelMap mmap) {
        mmap.put("dept", categoryService.selectDeptById(deptId));
        return prefix + "/tree";
    }

    /**
     * 加载部门列表树
     */
    @GetMapping("/treeData")
    @ResponseBody
    public List<Ztree> treeData() {
        List<Ztree> ztrees = categoryService.selectDeptTree(new SysCategory());
        return ztrees;
    }

    /**
     * 加载角色部门（数据权限）列表树
     */
    @GetMapping("/roleDeptTreeData")
    @ResponseBody
    public List<Ztree> deptTreeData(SysRole role) {
        List<Ztree> ztrees = categoryService.roleDeptTreeData(role);
        return ztrees;
    }
}
