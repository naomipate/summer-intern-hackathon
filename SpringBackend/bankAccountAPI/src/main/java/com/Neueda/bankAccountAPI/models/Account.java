package com.Neueda.bankAccountAPI.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "accounts")
@ToString
public class Account {

  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private Long id;
  private String user_name;
  private String password;
  private String first_name;
  private String last_name;
  private Double checking_balance;
  private String checking_type;
  private Double saving_balance;
  private Double saving_type;
}
