package com.hackathon.hackathon_project;

public class Account {
    private int accountID;
    private String username;
    private String password;
    private String accountName;
    private double checkingBalance;
    private double savingsBalance;

    public Account() {
    }

    public Account(int accountID, String username, String password, String accountName, double checkingBalance, double savingsBalance) {
        this.accountID = accountID;
        this.username = username;
        this.password = password;
        this.accountName = accountName;
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
    }

    public int getAccountID() {
        return accountID;
    }

    public void setAccountID(int accountID) {
        this.accountID = accountID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public double getCheckingBalance() {
        return checkingBalance;
    }

    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }
}
