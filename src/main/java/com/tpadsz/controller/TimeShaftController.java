package com.tpadsz.controller;

import com.tpadsz.entity.TimeShaft;
import com.tpadsz.service.TimeShaftService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: mySpringBoot2X
 * @description: 时间轴
 * @author: Mr.Ma
 * @create: 2018-10-10 10:09
 **/
@Controller
public class TimeShaftController {

    @Resource
    private TimeShaftService timeShaftService;

    /**
     * 关于我们
     * @return
     */
    @RequestMapping(value = "aboutus", method = RequestMethod.GET)
    public String aboutus(ModelMap modelMap){
//        List<TimeShaft> timeShaftLists = timeShaftService.findAllExcLastDay();
//        modelMap.put("timeShaftLists", timeShaftLists);
//        List<Integer> years = timeShaftService.findYear();
//        modelMap.put("years", years);
//        List<TimeShaft> lastDays = timeShaftService.findLastDay();
//        modelMap.put("lastDays", lastDays);
        List<TimeShaft> timeShaftLists = timeShaftService.findAll();
        modelMap.put("timeShaftLists", timeShaftLists);
        return "aboutofus";
    }

    @RequestMapping(value = "aboutus2", method = RequestMethod.GET)
    public String aboutus2(ModelMap modelMap){
        List<TimeShaft> timeShaftLists = timeShaftService.findAll();
        modelMap.put("timeShaftLists", timeShaftLists);
        return "test/aboutofus2";
    }
}
