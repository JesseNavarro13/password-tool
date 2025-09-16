package com.passwordtool.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class PasswordToolBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PasswordToolBackendApplication.class, args);
	}

	@RestController
	class TestController {
		@GetMapping("/hello")
		public String hello() {
			return "Backend is running!";
		}
	}
}
