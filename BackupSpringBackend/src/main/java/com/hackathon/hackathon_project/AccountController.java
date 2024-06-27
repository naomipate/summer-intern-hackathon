package com.hackathon.hackathon_project;

import java.util.*;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/account")
public class AccountController {
    private static Map<Integer, Account> accounts = new HashMap<Integer, Account>();
    static {
        accounts.put(1, new Account(1, "janedoe123", "test", "Jane Doe", 900, 1200));
        accounts.put(2, new Account(2, "johnsmith123", "test2", "John Smith", 1500, 1000));
        accounts.put(3, new Account(3, "albertgat0r", "test3", "Alber Gator", 500, 700));
    }

    @GetMapping("/")
    public Collection<Account> getAccounts() {
        return accounts.values();
    }
    @GetMapping(value="/{id}")
    public Account getAccountById(@PathVariable int id){
        return accounts.get(id);
    }
    @GetMapping
    public Account getAccountByUsername(@RequestParam("username") String username, @RequestParam("password") String password){
        for (Account account: accounts.values()){
            if (account.getUsername().equals(username) && account.getPassword().equals(password)){
                return account;
            }
        }
        return null;
    }
}
