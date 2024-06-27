DROP DATABASE IF EXISTS bankAccount_DB;

CREATE DATABASE bankAccount_DB;

\c bankAccount_DB

-- Drop the account table if it exists
DROP TABLE IF EXISTS accounts CASCADE;

-- Schema for the account table
CREATE TABLE accounts (
    id BIGINT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    balance DOUBLE PRECISION NOT NULL,
    account_type VARCHAR(255) NOT NULL
);

-- Inserting seed data into the accounts table
INSERT INTO accounts (id, user_name, first_name, last_name, balance, account_type) VALUES
(100000000000000001, 'johnsmith01', 'John', 'Smith', 8391.45, 'Checking'),
(100000000000000002, 'janedoe02', 'Jane', 'Doe', 7853.34, 'Savings'),
(100000000000000003, 'michaelj03', 'Michael', 'Johnson', 2485.56, 'Credit'),
(100000000000000004, 'emilyb04', 'Emily', 'Brown', 3569.24, 'Investment'),
(100000000000000005, 'davids05', 'David', 'Smith', 4256.78, 'Checking'),
(100000000000000006, 'sarahw06', 'Sarah', 'Wilson', 1234.56, 'Savings'),
(100000000000000007, 'chrism07', 'Chris', 'Moore', 7894.12, 'Credit'),
(100000000000000008, 'amyl08', 'Amy', 'Lee', 5647.89, 'Investment'),
(100000000000000009, 'jamesp09', 'James', 'Perez', 3456.78, 'Savings'),
(100000000000000010, 'lisac10', 'Lisa', 'Clark', 1234.56, 'Checking'),
(100000000000000011, 'johnsmith01', 'John', 'Smith', 3825.49, 'Checking');

DROP TABLE IF EXISTS transactions CASCADE;
CREATE TABLE transactions (
    transaction_uuid VARCHAR(255) PRIMARY KEY,
    account_id BIGINT REFERENCES accounts(id),
    transaction_type VARCHAR(255) NOT NULL,
    transaction_amount DOUBLE PRECISION NOT NULL
);

INSERT INTO transactions(transaction_uuid, account_id, transaction_type, transaction_amount) VALUES
('8222cfe9-ee71-446d-9fca-c744d1417640', 100000000000000001, 'Deposit', 8391.45),
('2167f9z1-tc61-h49e-6dja-k279l8d85295', 100000000000000001, 'Withdrawal', 5000.00),
('7956svg8-gz29-637b-5jkz-h951g9263951', 100000000000000011, 'Deposit', 5000.00);

