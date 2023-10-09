package com.paranthaman.vendormanagementsystem.model.enumerate;

import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ADMIN_CREATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ADMIN_DELETE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ADMIN_READ;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ADMIN_UPDATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.VENDOR_CREATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.VENDOR_DELETE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.VENDOR_READ;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.VENDOR_UPDATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ORGANIZATION_CREATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ORGANIZATION_DELETE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ORGANIZATION_READ;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ORGANIZATION_UPDATE;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {
    ADMIN(Set.of(
            ADMIN_READ,
            ADMIN_CREATE,
            ADMIN_UPDATE,
            ADMIN_DELETE,
            VENDOR_READ,
            VENDOR_CREATE,
            VENDOR_UPDATE,
            VENDOR_DELETE, 
            ORGANIZATION_READ,
            ORGANIZATION_CREATE,
            ORGANIZATION_UPDATE,
            ORGANIZATION_DELETE)),

    VENDOR(Set.of(
            VENDOR_READ,
            VENDOR_CREATE,
            VENDOR_UPDATE,
            VENDOR_DELETE)),
            
    ORGANIZATION(Set.of(
            ORGANIZATION_READ,
            ORGANIZATION_CREATE,
            ORGANIZATION_UPDATE,
            ORGANIZATION_DELETE));

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthority() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        for (Permission permission : getPermissions()) {
            authorities.add(new SimpleGrantedAuthority(permission.getPermission()));
        }

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
