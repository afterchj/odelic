package com.tpadsz.entity;

import java.io.Serializable;

/**
 * @program: mySpringBoot2X
 * @description:
 * @author: Mr.Ma
 * @create: 2018-09-28 17:57
 **/
public class Pages implements Serializable {
    private static final long serialVersionUID =1L;

    private String category;
    private String sonCategory;
    private Integer pageNum;
    private Integer totalPage;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSonCategory() {
        return sonCategory;
    }

    public void setSonCategory(String sonCategory) {
        this.sonCategory = sonCategory;
    }

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(Integer totalPage) {
        this.totalPage = totalPage;
    }
}
