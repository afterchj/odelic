package com.tpadsz.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.tpadsz.dao.OdelicDao;
import com.tpadsz.entity.Odelic;
import com.tpadsz.entity.Pages;
import com.tpadsz.service.OdelicService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @program: mySpringBoot2X
 * @description:
 * @author: Mr.Ma
 * @create: 2018-09-27 15:15
 **/
@Service
public class OdelicServiceImpl implements OdelicService {

    @Resource
    private OdelicDao odelicDao;

    @Override
    public PageInfo<Odelic> selectAll() {
        PageHelper.startPage(1, 8);
        List<Odelic> odelicList = odelicDao.selectAll();
        PageInfo<Odelic> pageInfo = new PageInfo<>(odelicList);
        return pageInfo;
    }

    @Override
    public PageInfo selectByTypeAndStyle(Pages pages) {
        Integer pageNum = pages.getPageNum();
        if (pageNum == null) {
            //未翻页
            pageNum = 1;
        }
        PageHelper.startPage(pageNum, 8);
        List<Odelic> odelicList = new ArrayList<>();
        String category = pages.getCategory();
        String sonCategory = pages.getSonCategory();

        if (category.equals("categoryId1") && sonCategory.equals
                ("sonCategoryId1"))
            //都选"全部"
            odelicList = odelicDao.selectAll();
        else if (category.equals("categoryId1"))
            //类型选"全部"
            odelicList = odelicDao.selectByStyle(sonCategory);
        else if (sonCategory.equals("sonCategoryId1"))
            //风格选"全部"
            odelicList = odelicDao.selectByType(category);
        else
            odelicList = odelicDao.selectByTypeAndStyle(category, sonCategory);

        PageInfo pageInfo = new PageInfo(odelicList);
        return pageInfo;
    }
}
