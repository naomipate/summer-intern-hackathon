DROP DATABASE IF EXISTS bankAccount_DB;

CREATE DATABASE bankAccount_DB;

\c bankAccount_DB

DROP TABLE IF EXISTS accounts;
CREATE TABLE accounts (
    id BIGINT PRIMARY KEY NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(16) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    balance DOUBLE PRECISION NOT NULL,
    account_type VARCHAR(255) NOT NULL
);

INSERT INTO accounts(id, user_name, password, first_name, last_name, balance, account_type) VALUES
(123456, 'johndoe@email.com', 'f1ction', 'John', 'Doe', 3400.00, 'checking'),
(123457, 'johndoe@email.com', 'f1ction', 'John', 'Doe', 5000.00, 'savings');

CREATE TABLE transactions (
    transaction_uuid VARCHAR(255) PRIMARY KEY NOT NULL,
    account_id BIGINT REFERENCES accounts(id),
    transaction_type VARCHAR(255) NOT NULL,
    transaction_amount DOUBLE PRECISION NOT NULL
);

INSERT INTO transactions(transaction_uuid, account_id, transaction_type, transaction_amount) VALUES
('8222cfe9-ee71-446d-9fca-c744d1417640', 123456, 'Deposit', 8400.00),
('2167f9z1-tc61-h49e-6dja-k279l8d85295', 123456, 'Withdrawal', 5000.00),
('7956svg8-gz29-637b-5jkz-h951g9263951', 123457, 'Deposit', 5000.00);