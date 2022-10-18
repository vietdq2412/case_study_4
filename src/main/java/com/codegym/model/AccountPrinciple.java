package com.codegym.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountPrinciple {
    private long id;
    private String username;
    private String token;
    private Set<Role> roles;
    private String status;
}
