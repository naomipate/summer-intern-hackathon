package com.Neueda.bankAccountAPI.repository;

import com.Neueda.bankAccountAPI.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
  Optional<Account> findByUserName(String username);
}
