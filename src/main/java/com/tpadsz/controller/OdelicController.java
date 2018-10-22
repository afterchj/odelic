package com.tpadsz.controller;

import com.github.pagehelper.PageInfo;
import com.tpadsz.entity.Odelic;
import com.tpadsz.entity.Pages;
import com.tpadsz.service.OdelicService;
import org.apache.commons.collections.FastHashMap;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.Map;

/**
 * @program: mySpringBoot2X
 * @description:
 * @author: Mr.Ma
 * @create: 2018-09-27 15:24
 **/
@Controller
public class OdelicController {

    @Resource
    private OdelicService odelicService;

    @RequestMapping(value = "/listType", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> listType(Pages pages){

        PageInfo pageInfos = odelicService.selectByTypeAndStyle(pages);
        Map<String, Object> maps = new FastHashMap();
        maps.put("list",pageInfos.getList());
        maps.put("getPageNum", pageInfos.getPageNum());
        maps.put("getPages", pageInfos.getPages());
//        System.out.println("getPages:"+pageInfos.getPages());
        return maps;
    }

    /**
     * 联系我们
     */
    @RequestMapping(value = "callus", method = RequestMethod.GET)
    public String callus(){
        return "callus";
    }


    /**
     * 产品中心
     * @param modelMap
     * @return
     */
    @RequestMapping(value = "product", method = RequestMethod.GET)
    public String product(ModelMap modelMap){
        PageInfo<Odelic> pageInfos = odelicService.selectAll();
        modelMap.put("pageInfos", pageInfos);
        return "productCenter";
    }

    /**
     * 导航
     * @return html
     */
    @RequestMapping(value = "navigation", method = RequestMethod.GET)
    public String navigation(){
        return "navigation";
    }

    /**
     * 导航
     * @return html
     */
    @RequestMapping(value = "navigation2", method = RequestMethod.GET)
    public String navigation2(){
        return "test/nav-fixed-alt1";
    }

}
