package com.Neueda.bankAccountAPI.repository;

import com.Neueda.bankAccountAPI.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
  Account findAccountById(Long id);
}
