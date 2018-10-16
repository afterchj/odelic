1 jar形式
>1.1修改pom.xml打包方式：  ```<packaging>jar</packaging>```  
>1.2注释tomcat依赖  

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
            <scope>provided</scope>
        </dependency>
>2.打包：mvn package
>3.运行：java -jar xx.jar

2.war形式
>2.1修改pom.xml打包方式：```<packaging>war</packaging>```
>2.2添加tomcat依赖覆盖默认内嵌的tomcat  

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
            <scope>provided</scope>
        </dependency>
>2.打包：mvn package
>3.将生成的war包文件丢到tomcat的webapp目录下启动tomcat