package com.tpadsz;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


/**
 * Created by hongjian.chen on 2018/9/17.
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/").setViewName("index");
//        registry.addViewController("/index").setViewName("index");
        registry.addViewController("/test").setViewName("test");
        registry.addViewController("/demo").setViewName("demo");
        registry.addViewController("/home").setViewName("home");
        registry.addViewController("/home_old").setViewName("home_old");
        registry.addViewController("/drawing").setViewName("drawing");
        registry.addViewController("/bedroom").setViewName("bedroom");
        registry.addViewController("/bookroom").setViewName("bookroom");
        registry.addViewController("/tline").setViewName("tline");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
    }

}
