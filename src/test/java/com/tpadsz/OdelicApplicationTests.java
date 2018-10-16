package com.tpadsz;

import com.alibaba.fastjson.JSON;
import com.tpadsz.entity.UserVo;
import com.tpadsz.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OdelicApplicationTests {

    @Autowired
    private UserService userService;

    @Test
    public void contextLoads() {
        List<UserVo> list = userService.getAll();
        System.out.println("size=" + list.size());
//        System.out.println(JSON.toJSONString(list));
        List<UserVo> list1=userService.getByPage(1);
        System.out.println(JSON.toJSONString(list1));
    }

}
