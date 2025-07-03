package sk.skripters;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SkriptersAuth {
    public static void main(String[] args) {
        System.out.println("Enabling auth");

        SpringApplication.run(SkriptersAuth.class, args);
    }
}