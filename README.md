# Introduction

Collaborators: Eileen An, Kaitlyn Chau, Anjaliba Jadeja, Naomi Pate
## Bank Account

- withdraw

- deposit

- transfer between user's account balances

- login to user's account


## Stock Market Dataset

WSJ: https://www.wsj.com/market-data/stocks

Kaggle: https://www.kaggle.com/datasets/jacksoncrow/stock-market-dataset

### Resources

Wireframe: [Figma](https://www.figma.com/design/Ow4kfwG5lA6f2RDtX8spXK/Untitled?node-id=1-2)
ERD: 
- Database bankaccount_db
- Table accounts
    id BIGINT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    checking_balance DOUBLE PRECISION NOT NULL,
    checking_type VARCHAR(255) NOT NULL,
    saving_balance DOUBLE PRECISION NOT NULL,
    saving_type VARCHAR(255) NOT NULL
  
Presentation slides: [KEAN](https://docs.google.com/presentation/d/1SExvfUqT7BKcyzqt9uN_4rt-6yqG8zRl9dljWrFJEzs/edit?usp=sharing)
Deployed Sites
