package com.tpadsz.service;

import com.github.pagehelper.PageHelper;
import com.tpadsz.dao.UserDao;
import com.tpadsz.entity.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by hongjian.chen on 2018/9/3.
 */

@Service
public class UserService {

    private final static int PAGE_SIZE = 2;

    @Autowired
    private UserDao userDao;

    public List<UserVo> getAll() {
        return userDao.getAll();
    }

    public void insertUser(UserVo userVo) {
        userDao.insertUser(userVo);
    }

    public List<UserVo> getByPage(int pageNum) {
        //开始分页
        PageHelper.startPage(pageNum, PAGE_SIZE);
        List<UserVo> list = userDao.getByPage();
        return list;
    }
}
