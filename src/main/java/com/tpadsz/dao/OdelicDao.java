package com.tpadsz.dao;

import com.tpadsz.entity.Odelic;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import java.util.List;

/**
 * @program: mySpringBoot2X
 * @description:
 * @author: Mr.Ma
 * @create: 2018-09-27 15:16
 **/
@Mapper
public interface OdelicDao {

    @Select("select * FROM t_odelic WHERE main='家用' AND category=#{category} order by id desc")
    List<Odelic> selectByType(@Param("category") String category);

    @Select("select * FROM t_odelic WHERE main='家用' AND category=#{category} AND sonCategory=#{sonCategory} order by id desc")
    List<Odelic> selectByTypeAndStyle(@Param("category") String category,
                                      @Param("sonCategory") String sonCategory);

    @Select("select * FROM t_odelic WHERE main='家用' AND sonCategory=#{sonCategory} order by id desc")
    List<Odelic> selectByStyle(@Param("sonCategory") String sonCategory);

    @Select("select * FROM t_odelic order by id desc")
    List<Odelic> selectAll();
}
