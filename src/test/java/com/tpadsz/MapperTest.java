package com.tpadsz;

import com.tpadsz.dao.OdelicDao;
import com.tpadsz.entity.Odelic;
import com.tpadsz.entity.TimeShaft;
import com.tpadsz.service.OdelicService;
import com.tpadsz.service.TimeShaftService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: mySpringBoot2X
 * @description:通用Mapper 分页
 * @author: Mr.Ma
 * @create: 2018-08-23 16:31
 **/
@RunWith(SpringRunner.class)
@SpringBootTest
public class MapperTest {
    private static final Logger log = LoggerFactory.getLogger(MapperTest.class);

//    @Resource
//    private TPermissionInitDao tPermissionInitDao;

//    @Resource
//    private PermissionDao permissionDao;
//    @Resource
//    private PermissionService permissionService;
//    @Resource
//    private UserService userService;
    @Resource
    private OdelicService odelicService;
    @Resource
    private OdelicDao odelicDao;

    @Resource
    private TimeShaftService timeShaftService;

//    private static ApplicationContext ac;
//
//    static {
//        ac = new ClassPathXmlApplicationContext();
//    }

//    public static SqlSession getSession() {
//        SqlSessionFactory factory = (SqlSessionFactory) ac.getBean
//                ("sqlSessionFactory");
//        return factory.openSession();
//    }

//    UserService userService = ac.getBean("userService", UserService.class);
    @Test
    public void test1() throws Exception {
//        List<TPermissionInit> lists = tPermissionInitDao.getAll();
//        System.out.println(lists.toString());
//        UserService userService = (UserService) SpringUtils.getBean("userService");
//        UsersDao usersDao = (UsersDao) SpringUtils.getBean("userDao");
//        User user = userService.findByUserName("admin");
//        System.out.println(user.toString());
    }

    @Test
    public void test2(){
//        TRole tRole = permissionDao.findRoleByRoleName("user");
//        System.out.println(tRole.toString());
    }

    @Test
    public void test3(){

//        TUser tUser = new TUser("user01","user01", "0", "user" );
//        userService.save(tUser);
    }

    @Test
    public void test4(){
//        List<TUser> allUsers = userService.getAllUsers();
//        System.out.println(allUsers.toString());
    }

    @Test
    public void test5(){
        List<Odelic> odelicList = odelicDao.selectByType("categoryId2");
        for (Odelic odelic:odelicList){
            System.out.println(odelic.toString());
        }
    }

//    @Test
//    public void test6(){
//        PageInfo pageInfos = odelicService.selectByTypeAndStyle(1,"categoryId2","sonCategoryId1");
//        System.out.println("getPageNum:"+pageInfos.getPageNum());
//        System.out.println("getPages:"+ pageInfos.getPages());
//        System.out.println("size:"+pageInfos.getList().size());
//    }

    @Test
    public void test7(){
        List<TimeShaft> shafts = timeShaftService.findAllExcLastDay();

        for (TimeShaft shaft:shafts){
            System.out.println(shaft.getYear()+" " + shaft.getMonth() + " " + shaft.getDay()+ " " + shaft.getIntro());
        }
    }

    @Test
    public void test8(){
        List<Integer> shafts = timeShaftService.findYear();
        for (Integer shaft:shafts){
            System.out.println(shaft);
        }
    }
}