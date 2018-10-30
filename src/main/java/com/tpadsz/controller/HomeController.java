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

    @RequestMapping(value = "/right")
    public String right() {
        return "layout/right";
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

    @RequestMapping(value = "/comm1")
    public String comm1() {
        return "comm/commercial1";
    }

    @RequestMapping(value = "/comm2")
    public String comm2() {
        return "comm/commercial2";
    }

    @RequestMapping(value = "/comm311")
    public String comm311() {
        return "comm/commercial3_1jiudian_1";
    }

    @RequestMapping(value = "/comm312")
    public String comm312() {
        return "comm/commercial3_1jiudian_2";
    }

    @RequestMapping(value = "/comm313")
    public String comm313() {
        return "comm/commercial3_1jiudian_3";
    }

    @RequestMapping(value = "/comm314")
    public String comm314() {
        return "comm/commercial3_1jiudian_4";
    }

    @RequestMapping(value = "/comm315")
    public String comm315() {
        return "comm/commercial3_1jiudian_5";
    }

    @RequestMapping(value = "/comm321")
    public String comm321() {
        return "comm/commercial3_2dianpu_1";
    }

    @RequestMapping(value = "/comm322")
    public String comm322() {
        return "comm/commercial3_2dianpu_2";
    }

    @RequestMapping(value = "/comm323")
    public String comm323() {
        return "comm/commercial3_2dianpu_3";
    }

    @RequestMapping(value = "/comm324")
    public String comm324() {
        return "comm/commercial3_2dianpu_4";
    }

    @RequestMapping(value = "/comm325")
    public String comm325() {
        return "comm/commercial3_2dianpu_5";
    }

    @RequestMapping(value = "/comm326")
    public String comm326() {
        return "comm/commercial3_2dianpu_6";
    }

    @RequestMapping(value = "/comm331")
    public String comm331() {
        return "comm/commercial3_3canting_1";
    }

    @RequestMapping(value = "/comm332")
    public String comm332() {
        return "comm/commercial3_3canting_2";
    }

    @RequestMapping(value = "/comm333")
    public String comm333() {
        return "comm/commercial3_3canting_3";
    }

    @RequestMapping(value = "/comm334")
    public String comm334() {
        return "comm/commercial3_3canting_4";
    }

    @RequestMapping(value = "/comm335")
    public String comm335() {
        return "comm/commercial3_3canting_5";
    }

    @RequestMapping(value = "/comm336")
    public String comm336() {
        return "comm/commercial3_3canting_6";
    }

    @RequestMapping(value = "/comm341")
    public String comm341() {
        return "comm/commercial3_4bangongsi_1";
    }

    @RequestMapping(value = "/comm342")
    public String comm342() {
        return "comm/commercial3_4bangongsi_2";
    }

    @RequestMapping(value = "/comm343")
    public String comm343() {
        return "comm/commercial3_4bangongsi_3";
    }

    @RequestMapping(value = "/comm351")
    public String comm351() {
        return "comm/commercial3_5zhanting_1";
    }

    @RequestMapping(value = "/comm352")
    public String comm352() {
        return "comm/commercial3_5zhanting_2";
    }

    @RequestMapping(value = "/comm361")
    public String comm361() {
        return "comm/commercial3_6xuexiao_1";
    }

    @RequestMapping(value = "/comm362")
    public String comm362() {
        return "comm/commercial3_6xuexiao_2";
    }

    @RequestMapping(value = "/comm363")
    public String comm363() {
        return "comm/commercial3_6xuexiao_3";
    }

    @RequestMapping(value = "/comm364")
    public String comm364() {
        return "comm/commercial3_6xuexiao_4";
    }

    @RequestMapping(value = "/comm365")
    public String comm365() {
        return "comm/commercial3_6xuexiao_5";
    }

    @RequestMapping(value = "/comm366")
    public String comm366() {
        return "comm/commercial3_6xuexiao_6";
    }

    @RequestMapping(value = "/comm371")
    public String comm371() {
        return "comm/commercial3_7yanhuiting_1";
    }

    @RequestMapping(value = "/comm372")
    public String comm372() {
        return "comm/commercial3_7yanhuiting_2";
    }

    @RequestMapping(value = "/comm373")
    public String comm373() {
        return "comm/commercial3_7yanhuiting_3";
    }

    @RequestMapping(value = "/comm374")
    public String comm374() {
        return "comm/commercial3_7yanhuiting_4";
    }

    @RequestMapping(value = "/comm375")
    public String comm375() {
        return "comm/commercial3_7yanhuiting_5";
    }


}
