package com.Neueda.bankAccountAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableAutoConfiguration
@EnableJpaRepositories
public class BankAccountApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankAccountApiApplication.class, args);
	}

}
