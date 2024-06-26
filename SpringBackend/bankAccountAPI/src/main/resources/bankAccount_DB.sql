DROP DATABASE IF EXISTS bankAccount_DB;

CREATE DATABASE bankAccount_DB;

\c bankAccount_DB

-- Drop the account table if it exists
DROP TABLE IF EXISTS accounts CASCADE;

-- Schema for the account table
CREATE TABLE accounts (
    id BIGINT PRIMARY KEY,
    password VARCHAR(16) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    balance DOUBLE PRECISION NOT NULL,
    account_type VARCHAR(255) NOT NULL
);

-- Inserting seed data into the accounts table
INSERT INTO accounts (id, password, user_name, first_name, last_name, balance, account_type) VALUES
(100000000000000001, 'P@ssw0rd123456', 'johnsmith01', 'John', 'Smith', 8391.45, 'Checking'),
(100000000000000002, 'S3cur3P@ssw0rd', 'janedoe02', 'Jane', 'Doe', 7853.34, 'Savings'),
(100000000000000003, 'P@ssw0rd098765', 'michaelj03', 'Michael', 'Johnson', 2485.56, 'Credit'),
(100000000000000004, 'S3cur3P@ss0987', 'emilyb04', 'Emily', 'Brown', 3569.24, 'Investment'),
(100000000000000005, 'P@ssw0rd543210', 'davids05', 'David', 'Smith', 4256.78, 'Checking'),
(100000000000000006, 'S3cur3P@ss6543', 'sarahw06', 'Sarah', 'Wilson', 1234.56, 'Savings'),
(100000000000000007, 'P@ssw0rd678901', 'chrism07', 'Chris', 'Moore', 7894.12, 'Credit'),
(100000000000000008, 'S3cur3P@ss8765', 'amyl08', 'Amy', 'Lee', 5647.89, 'Investment'),
(100000000000000009, 'P@ssw0rd123987', 'jamesp09', 'James', 'Perez', 3456.78, 'Savings'),
(100000000000000010, 'S3cur3P@ss1098', 'lisac10', 'Lisa', 'Clark', 1234.56, 'Checking');
--
--DROP TABLE IF EXISTS transactions CASCADE;
--CREATE TABLE transactions (
--    transaction_uuid VARCHAR(255) PRIMARY KEY,
--    account_id BIGINT REFERENCES accounts(id),
--    transaction_type VARCHAR(255) NOT NULL,
--    transaction_amount DOUBLE PRECISION NOT NULL
--);
--
--INSERT INTO transactions(transaction_uuid, account_id, transaction_type, transaction_amount) VALUES
--('8222cfe9-ee71-446d-9fca-c744d1417640', 123456, 'Deposit', 8400.00),
--('2167f9z1-tc61-h49e-6dja-k279l8d85295', 123456, 'Withdrawal', 5000.00),
--('7956svg8-gz29-637b-5jkz-h951g9263951', 123457, 'Deposit', 5000.00);

