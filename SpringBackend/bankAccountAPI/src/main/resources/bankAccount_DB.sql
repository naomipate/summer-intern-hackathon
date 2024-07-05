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
    checking_balance DOUBLE PRECISION NOT NULL,
    checking_type VARCHAR(255) NOT NULL,
    saving_balance DOUBLE PRECISION NOT NULL,
    saving_type VARCHAR(255) NOT NULL
);

-- Inserting seed data into the accounts table
INSERT INTO accounts (id, user_name, first_name, last_name, checking_balance, checking_type, saving_balance, saving_type) VALUES
(100000000000000001, 'janedoe01', 'Jane', 'Doe', 8391.45,'Checking', 7853.34, 'Savings'),
(100000000000000002, 'davids02', 'David', 'Smith', 4256.78, 'Checking', 3569.24, 'Savings'),
(100000000000000003, 'sarahw03', 'Sarah', 'Wilson', 1234.56, 'Checking', 1234.56, 'Savings');

--DROP TABLE IF EXISTS transactions CASCADE;
--CREATE TABLE transactions (
--    transaction_uuid VARCHAR(255) PRIMARY KEY,
--    account_id BIGINT REFERENCES accounts(id),
--    transaction_type VARCHAR(255) NOT NULL,
--    transaction_amount DOUBLE PRECISION NOT NULL
--);
--
--INSERT INTO transactions(transaction_uuid, account_id, transaction_type, transaction_amount) VALUES
--('8222cfe9-ee71-446d-9fca-c744d1417640', 100000000000000001, 'Deposit', 8391.45),
--('2167f9z1-tc61-h49e-6dja-k279l8d85295', 100000000000000001, 'Withdrawal', 5000.00),
--('7956svg8-gz29-637b-5jkz-h951g9263951', 100000000000000011, 'Deposit', 5000.00);

