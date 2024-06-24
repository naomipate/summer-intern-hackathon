package com.Neueda.bankAccountAPI.controllers;

import com.Neueda.bankAccountAPI.repository.AccountRepository;
import com.Neueda.bankAccountAPI.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Neueda.bankAccountAPI.models.Account;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/accounts")
public class AccountController {

  private final AccountService accountService;

  @Autowired
  public AccountController(AccountService accountService){
    this.accountService = accountService;
  }

  // route to retrieve all accounts
  @GetMapping
  public ResponseEntity<List<Account>> getAccounts(){
    List<Account> accounts = accountService.getAllAccounts();
    return new ResponseEntity<>(accounts, HttpStatus.OK);
  }

//  // route to retrieve account by id
//  @GetMapping("/{id}")
//  public ResponseEntity<Account> getAccountById(@PathVariable Long id){
//    return accountService.getAccountById(id).map(account -> new ResponseEntity<>(account, HttpStatus.OK))
//        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//  }
//
//  // route to create new account
//  @PostMapping
//  public ResponseEntity<Account> createAccount(@RequestBody Account account){
//    Account savedAccount = accountService.createAccount(account);
//    return new ResponseEntity<>(savedAccount, HttpStatus.CREATED);
//  }

//  // route to update account balance
//  @PatchMapping("/{id}/balance")
//  public ResponseEntity<Account> updateAccountBalance(@PathVariable Long id, @RequestBody Account updatedAccount) {
//    return accountService.findById(id).map(account -> {
//      account.setBalance(updatedAccount.getBalance());
//      Account savedAccount = accountService.save(account);
//      return new ResponseEntity<>(savedAccount, HttpStatus.OK);
//    }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//  }
//
//  // routes to update account info
//  @PatchMapping("/{id}/name")
//  public ResponseEntity<Account> updateFirstAndLastName(@PathVariable Long id, @RequestBody Account updatedAccount) {
//    return accountService.findById(id).map(account -> {
//      account.setFirstName(updatedAccount.getFirstName());
//      account.setLastName(updatedAccount.getLastName());
//      Account savedAccount = accountService.save(account);
//      return new ResponseEntity<>(savedAccount, HttpStatus.OK);
//    }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//  }
//
//  @PatchMapping("/{id}/username")
//  public ResponseEntity<Account> updateUserName(@PathVariable Long id, @RequestBody Account updatedAccount) {
//    return accountService.findById(id).map(account -> {
//      account.setUsername(updatedAccount.getUsername());
//      Account savedAccount = accountService.save(account);
//      return new ResponseEntity<>(savedAccount, HttpStatus.OK);
//    }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//  }
//
//  @PatchMapping("/{id}/pass")
//  public ResponseEntity<Account> updatePassword(@PathVariable Long id, @RequestBody Account updatedAccount) {
//    return accountService.findById(id).map(account -> {
//      account.setPassword(updatedAccount.getPassword());
//      Account savedAccount = accountService.save(account);
//      return new ResponseEntity<>(savedAccount, HttpStatus.OK);
//    }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//  }
//
//  // route to delete account
//  @DeleteMapping("/{id}")
//  public ResponseEntity<Void> deleteAccount(@PathVariable Long id) {
//    return accountService.findById(id).map(account -> {
//      accountService.delete(account);
//      return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
//    }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//  }
}