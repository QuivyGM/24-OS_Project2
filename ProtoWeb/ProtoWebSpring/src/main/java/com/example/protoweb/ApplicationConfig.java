package com.example.protoweb;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import JpaServices.AccountsService;

@Configuration
public class ApplicationConfig {
	public ApplicationConfig() {
		
	}
	
	@Bean
	public AccountsService accountsservice() {
		return new AccountsService();
	}
}
