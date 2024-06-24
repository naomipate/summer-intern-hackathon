package com.Neueda.bankAccountAPI.repository;

import com.Neueda.bankAccountAPI.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {

}
