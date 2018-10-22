package com.tpadsz.service.impl;

import com.tpadsz.dao.TimeShaftDao;
import com.tpadsz.entity.TimeShaft;
import com.tpadsz.service.TimeShaftService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: mySpringBoot2X
 * @description:
 * @author: Mr.Ma
 * @create: 2018-10-10 10:07
 **/
@Service
public class TimeShaftServiceImpl implements TimeShaftService {

    @Resource
    private TimeShaftDao timeShaftDao;

    @Override
    public List<TimeShaft> findAllExcLastDay() {
        return timeShaftDao.findAllExcLastDay();
    }

    @Override
    public List<Integer> findYear() {
        return timeShaftDao.findYear();
    }

    @Override
    public List<TimeShaft> findLastDay() {
        return timeShaftDao.findLastDay();
    }

    @Override
    public List<TimeShaft> findAll() {
        return timeShaftDao.findAll();
    }
}
