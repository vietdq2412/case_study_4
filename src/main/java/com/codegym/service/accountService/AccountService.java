package com.codegym.service.accountService;

import com.codegym.model.Account;
import com.codegym.model.Role;
import com.codegym.repository.IAccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@Transactional
public class AccountService implements IAccountService {
    @Autowired
    IAccountRepo accountRepo;

    @Override
    public List<Account> findAll() {
        return accountRepo.findAll();
    }

    @Override
    public boolean save(Account account) {
        boolean check = accountRepo.existsAccountByUsername(account.getUsername());
        if (!check) {
            accountRepo.save(account);
            return true;
        }
        return false;
    }

    @Override
    public boolean delete(Long id) {
        if (accountRepo.existsById(id)) {
            accountRepo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Account findById(Long id) {
        return accountRepo.findById(id).get();
    }

    public Account findByUserName(String username) {
        return accountRepo.findAccountByUsername(username);
    }

    /**
     *
     * @param account include username and password
     * @return account if existed, null if not found this account
     */
    public Account  checkLogin(Account account) {
        Account accountRs = accountRepo.findAccountByUsernameAndPassword(account.getUsername(), account.getPassword());
        return accountRs;
    }

    public List<GrantedAuthority> getAuthorities(Long accountID) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        Set<Role> roleList = findById(accountID).getRoles();
        for (Role role : roleList) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }
        return authorities;
    }
}
