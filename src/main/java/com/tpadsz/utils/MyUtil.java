package com.tpadsz.utils;

import org.junit.Test;
import java.util.Random;

/**
 * Created by hongjian.chen on 2018/10/12.
 */
public class MyUtil {

    @Test
    public void test(){
        Random random=new Random();
        for (int i=0;i<10;i++){
            System.out.println(random.nextInt(15)+5);
        }
    }
}
