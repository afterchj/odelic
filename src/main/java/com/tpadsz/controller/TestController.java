package com.tpadsz.controller;

import com.alibaba.fastjson.JSON;
import com.tpadsz.entity.UserVo;
import com.tpadsz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * Created by hongjian.chen on 2018/9/26.
 */

@RestController
public class TestController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/userList")
    public String listUser() {
        List<UserVo> list = userService.getAll();
        return JSON.toJSONString(list);
    }

    @RequestMapping(value = "/page")
    public String page(int pageNum) {
        List<UserVo> list = userService.getByPage(pageNum);
        return JSON.toJSONString(list);
    }
}
