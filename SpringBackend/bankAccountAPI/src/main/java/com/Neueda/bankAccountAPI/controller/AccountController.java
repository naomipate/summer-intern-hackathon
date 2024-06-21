package com.Neueda.bankAccountAPI.controller;

import com.Neueda.bankAccountAPI.domain.Account;
import com.Neueda.bankAccountAPI.repository.AccountRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class AccountController {
  private final AccountRepository accountRepository;

  public Page<Account> getAllAccounts(int page, int size ) {
    return accountRepository.findAll(PageRequest.of(page, size, Sort.by("accountType")));
  }

  public Account getAccount(String username) {
    return accountRepository.findByUserName(username).orElseThrow(() -> new RuntimeException("No account found by that username or password"));
  }

  public Account createAccount(Account account) {
    return accountRepository.save(account);
  }

  public void deleteAccount(Account account) {
    accountRepository.delete(account);
  }
}
