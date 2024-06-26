package com.Neueda.bankAccountAPI.service;

import com.Neueda.bankAccountAPI.models.Account;
import com.Neueda.bankAccountAPI.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

  private AccountRepository accountRepository;

  @Autowired
  public AccountService(AccountRepository accountRepository) {
    this.accountRepository = accountRepository;
  }

// Displays all accounts under this user
  public List<Account> getAllAccounts() {
    return accountRepository.findAll();
  }

// Displays the account the user selects
  public Optional<Account> getAccountById(Long id) {
    return accountRepository.findById(id);
  }

// Creates new account
  public Account createAccount(Account account) {

    System.out.println(account);
    return accountRepository.save(account);
  }

// Updates account balance
  public Account updateAccountBalance(Long id, Double balance) {
    Account account = accountRepository.findAccountById(id);
    account.setBalance(balance);
    return accountRepository.save(account);
  }

// Updates account info
  public Account updateAccountInfo(Long id, String firstName, String lastName) {
    Account account = accountRepository.findAccountById(id);
    account.setFirst_name(firstName);
    account.setLast_name(lastName);
    return accountRepository.save(account);
  }

// Updates account username
  public Account updateAccountUsername(Long id, String username) {
    Account account = accountRepository.findAccountById(id);
    account.setUser_name(username);
    return accountRepository.save(account);
  }

// Updates account password
  public Account updateAccountPW(Long id, String newPassword) {
    Account account = accountRepository.findAccountById(id);
    account.setPassword(newPassword);
    return accountRepository.save(account);
  }

// Deletes account
  public void deleteAccount(Long id) {
    accountRepository.deleteById(id);
  }
}
