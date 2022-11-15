package com.codegym.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table
@ToString
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;
    @Column(nullable = false, length = 50, unique = true)
    private String displayName;
    private LocalDate DOB;
    private String address;
    private String image;

    @Column(nullable = false, length = 50, unique = true)
    private String email;
    private String phoneNumber;
    private String aboutMe;
    private String status;
    @OneToOne
    @JoinColumn(name = "accountId", unique = true,
            nullable = false, updatable = false)
    private Account account;

    @OneToMany
    private Set<AppUser> friends;
    @OneToMany
    private Set<AppUser> friendRequest;
    @OneToMany
    private Set<AppUser> blocked;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
