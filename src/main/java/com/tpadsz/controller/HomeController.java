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

    @RequestMapping(value = "/header")
    public String header() {
        return "layout/header";
    }

    @RequestMapping(value = "/trade")
    public String trade() {
        return "layout/trade";
    }

    @RequestMapping(value = "/foot")
    public String footer() {
        return "layout/footer";
    }

    @RequestMapping(value = "/common")
    public String common() {
        return "layout/common";
    }

    @RequestMapping(value = "/connectedlighting")
    public String connectedlighting() {
        return "connectedlighting";
    }

    @RequestMapping(value = "/japanese-style")
    public String japaneseStyle() {
        return "japanese-style";
    }

    @RequestMapping(value = "/modern-concise-style")
    public String modernConciseStyle() {
        return "modern-concise-style";
    }

    @RequestMapping(value = "/natural-style")
    public String naturalStyle() {
        return "natural-style";
    }

    @RequestMapping(value = "/fashion-style")
    public String fashionStyle() {
        return "fashion-style";
    }

    @RequestMapping(value = "/industrial-style")
    public String industrialStyle() {
        return "industrial-style";
    }

    @RequestMapping(value = "/steampunk-style")
    public String steampunkStyle() {
        return "steampunk-style";
    }

}
