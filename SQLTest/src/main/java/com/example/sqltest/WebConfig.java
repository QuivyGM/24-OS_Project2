package com.example.sqltest;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//다른 도메인에서 접근하는 것을 제한하는 Cors정책을 허용하기 위해 Springboot의 설정을 바꿔주는 클래스이다.

@Configuration
public class WebConfig implements WebMvcConfigurer {
	@Override
	public void addCorsMappings(CorsRegistry reg) {
		reg.addMapping("/**").allowedOrigins("http://localhost:3000");
	}
}
