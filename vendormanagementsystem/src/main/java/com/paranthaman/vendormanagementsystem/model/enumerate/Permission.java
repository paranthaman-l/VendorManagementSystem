package com.paranthaman.vendormanagementsystem.model.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {
    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    VENDOR_READ("vendor:read"),
    VENDOR_UPDATE("vendor:update"),
    VENDOR_CREATE("vendor:create"),
    VENDOR_DELETE("vendor:delete"),
    ORGANIZATION_READ("organization:read"),
    ORGANIZATION_UPDATE("organization:update"),
    ORGANIZATION_CREATE("organization:create"),
    ORGANIZATION_DELETE("organization:delete");

    @Getter
    private final String permission;
}
