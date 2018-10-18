package com.tpadsz.service;


import com.tpadsz.entity.TimeShaft;

import java.util.List;

/**
 * @program: mySpringBoot2X
 * @description:
 * @author: Mr.Ma
 * @create: 2018-10-10 10:06
 **/
public interface TimeShaftService {

    List<TimeShaft> findAllExcLastDay();

    List<Integer> findYear();

    List<TimeShaft> findLastDay();
}
