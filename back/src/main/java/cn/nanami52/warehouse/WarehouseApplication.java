package cn.nanami52.warehouse;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2()
@SpringBootApplication(scanBasePackages = "cn.nanami52.warehouse")
@MapperScan("cn.nanami52.warehouse.dao")
public class WarehouseApplication {

    public static void main(String[] args) {
        SpringApplication.run(WarehouseApplication.class, args);
    }

}
