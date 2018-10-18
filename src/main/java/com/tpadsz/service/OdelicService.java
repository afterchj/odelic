package com.tpadsz.service;

import com.github.pagehelper.PageInfo;
import com.tpadsz.entity.Odelic;
import com.tpadsz.entity.Pages;

/**
 * @program: mySpringBoot2X
 * @description:
 * @author: Mr.Ma
 * @create: 2018-09-27 14:37
 **/
public interface OdelicService {

    PageInfo<Odelic> selectAll();

    PageInfo<Odelic> selectByTypeAndStyle(Pages pages);

}
