package com.paranthaman.vendormanagementsystem.config;

import com.paranthaman.vendormanagementsystem.constant.Api;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(info = @Info(contact = @Contact(name = "PARANTHAMAN L", email = "paranthamanl2004@gmail.com", url = ""), description = "This is open api documentation for Vendor Management System", title = "Delta_VMS", version = "1.0", license = @License(name = "MIT", url = ""), termsOfService = "Terms of service"), servers = @Server(description = "DEV ENV", url = Api.DEFAULT))
@SecurityScheme(name = "bearerAuth", description = "JWT auth description", scheme = "bearer", type = SecuritySchemeType.HTTP, bearerFormat = "JWT", in = SecuritySchemeIn.HEADER)
public class OpenApiConfig {

}
