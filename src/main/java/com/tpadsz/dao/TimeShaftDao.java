package com.tpadsz.dao;

import com.tpadsz.entity.TimeShaft;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @program: mySpringBoot2X
 * @description: 时间轴
 * @author: Mr.Ma
 * @create: 2018-10-10 09:50
 **/
@Mapper
public interface  TimeShaftDao {

    @Select("SELECT * FROM t_time_shaft WHERE date not in(SELECT max(date) from t_time_shaft GROUP BY year) ORDER BY year desc,month desc,day desc")
    List<TimeShaft> findAllExcLastDay();

    @Select("SELECT DISTINCT YEAR FROM t_time_shaft ORDER BY YEAR DESC")
    List<Integer> findYear();

    @Select("SELECT * FROM t_time_shaft WHERE date in(SELECT max(date) from t_time_shaft GROUP BY year) ORDER BY year desc")
    List<TimeShaft> findLastDay();
}
