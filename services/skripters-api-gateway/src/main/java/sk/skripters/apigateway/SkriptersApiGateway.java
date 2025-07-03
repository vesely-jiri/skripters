package sk.skripters.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SkriptersApiGateway {
    public static void main(String[] args) {
        System.out.println("Enabling api gateway");

        SpringApplication.run(SkriptersApiGateway.class, args);
    }
}