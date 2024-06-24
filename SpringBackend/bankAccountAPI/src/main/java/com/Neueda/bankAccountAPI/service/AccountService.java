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

//// Displays the account the user selects
//  public Optional<Account> getAccountById(Long id) {
//    return accountRepository.findById(id);
//  }
//
//// Creates new account
//  public Account createAccount(Account account) {
//    return accountRepository.save(account);
//  }

//// Updates account username
//  public String updateAccountUsername(String oldUsername, String newUsername, String password) {
//    Account account = getAllAccounts(oldUsername);
//    if (account.getPassword().equals(password)) account.setUsername(newUsername);
//    return account.getUsername();
//  }
//
//// Updates account password
//  public String updateAccountPW(String username, String oldPassword, String newPassword) {
//    Account account = getAllAccounts(username);
//    if (account.getPassword().equals(oldPassword)) account.setPassword(newPassword);
//    return "Thank you for updating your password";
//  }
//
//// Updates account info
//  public String updateAccountInfo(String username, String firstName, String lastName) {
//    Account account = getAllAccounts(username);
//    account.setFirstName(firstName);
//    account.setLastName(lastName);
//    return "Thank you for updating your name to "
//        + account.getFirstName() + " " + account.getLastName()
//        + ".";
//  }
//
//// Deletes account
//  public String deleteAccount(Account account) {
//    long balance = account.getBalance();
//    String message = "You must pay off your balance to close this account.";
//    if (balance > 0.00) {
//      message = "Your balance of $ " + balance + " will be sent to you.";
//      accountRepository.delete(account);
//    }
//    return message;
//  }
}
