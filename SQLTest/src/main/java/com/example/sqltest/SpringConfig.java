package com.example.sqltest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SpringConfig {
	
	public SpringConfig() {
	}
	
	@Bean
	public UserService userService() {
		return new UserService();
	}
}
