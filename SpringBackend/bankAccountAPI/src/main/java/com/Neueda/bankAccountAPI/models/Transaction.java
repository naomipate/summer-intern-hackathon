package com.Neueda.bankAccountAPI.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_DEFAULT;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(NON_DEFAULT)
@Table(name = "transactions")

public class Transaction {
  @Id
  @UuidGenerator
  @Column(name = "transaction_uuid", unique = true, updatable = false)
  private String transaction_uuid;
  private Long account_id;
  private String transaction_type;
  private Double transaction_amount;
}
