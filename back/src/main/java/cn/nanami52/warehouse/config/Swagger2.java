package cn.nanami52.warehouse.config;

import io.swagger.annotations.Api;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class Swagger2 {

    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("warehouse")
                .enable(true)
                .apiInfo(apiInfo()).select()
                // 只到添加了Api注解的类进行生成
                .apis(RequestHandlerSelectors.withClassAnnotation(Api.class))
                // 对所有路径进行扫描
                .paths(PathSelectors.any())
                .build();
    }

    /**
     * @return 生成文档说明信息
     */
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("仓储管理 API Document")
                .description("仓管API文档")
                .termsOfServiceUrl("http://localhost:8080")
                .license("前台首页")
                .licenseUrl("http://localhost:8080/home/index")
                .version("1.0.0").build();
    }
}
