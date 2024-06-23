package com.Neueda.bankAccountAPI.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Neueda.bankAccountAPI.models.Account;

import java.util.List;

@RestController
public class AccountController {
  @GetMapping("/accounts")
  public List<Account> getAccounts(){
    System.out.println("Trigger");
    return null;
  }

  @GetMapping("/accounts/{id}")
  public List<Account> getSelectedAccount(@PathVariable long id){
    System.out.println("Trigger");
    return null;
  }

  @PostMapping("/accounts")
  public List<Account> createAccount(){
    System.out.println("Trigger");
    return null;
  }

}

//// retrieve all ✅
///accounts
//// retrieve selected ✅
///accounts/1
//// create one, passing in the body you created
///accounts
//// update, passing in the body of what you changed
///accounts/1
//// delete, sends a confirmation of the account deletion
///accounts/1