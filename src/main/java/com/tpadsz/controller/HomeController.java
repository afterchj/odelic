package com.tpadsz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by hongjian.chen on 2018/9/29.
 */

@Controller
public class HomeController {
    @RequestMapping(value = {"/", "/index"})
    public String view() {
        return "index";
    }

    @RequestMapping(value = "foot")
    public String footer() {
        return "layout/footer";
    }

    @RequestMapping(value = "/common")
    public String common() {
        return "layout/common";
    }
}
