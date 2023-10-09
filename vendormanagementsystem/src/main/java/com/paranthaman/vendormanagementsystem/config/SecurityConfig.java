package com.paranthaman.vendormanagementsystem.config;

import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ADMIN_CREATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ADMIN_DELETE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ADMIN_READ;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.ADMIN_UPDATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.VENDOR_CREATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.VENDOR_DELETE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.VENDOR_READ;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Permission.VENDOR_UPDATE;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Role.ADMIN;
import static com.paranthaman.vendormanagementsystem.model.enumerate.Role.VENDOR;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.paranthaman.vendormanagementsystem.constant.Api;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

        private final JwtAuthenticationFilter jwtAuthenticationFilter;
        private final AuthenticationProvider authenticationProvider;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
                httpSecurity.cors(corsConfirguarationSource -> corsConfirguarationSource
                                .configurationSource(corsConfigurationSource()))
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(authorize -> authorize
                                                .requestMatchers(Api.AUTH + "/**").permitAll()
                                                .requestMatchers(Api.OTP + "/**").permitAll()
                                                // .requestMatchers(Api.SWAGGER + "/**").permitAll()
                                                .requestMatchers(Api.ADMIN + "/**")
                                                .hasRole(ADMIN.name())
                                                .requestMatchers(GET, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_READ.name())
                                                .requestMatchers(POST, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_CREATE.name())
                                                .requestMatchers(PUT, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_UPDATE.name())
                                                .requestMatchers(DELETE, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_DELETE.name())
                                                .requestMatchers(Api.VENDOR + "/**")
                                                .hasAnyRole(ADMIN.name(), VENDOR.name())
                                                .requestMatchers(GET, Api.VENDOR + "/**")
                                                .hasAnyAuthority(ADMIN_READ.name(), VENDOR_READ.name())
                                                .requestMatchers(POST, Api.VENDOR + "/**")
                                                .hasAnyAuthority(ADMIN_CREATE.name(), VENDOR_CREATE.name())
                                                .requestMatchers(PUT, Api.VENDOR + "/**")
                                                .hasAnyAuthority(ADMIN_UPDATE.name(), VENDOR_UPDATE.name())
                                                .requestMatchers(DELETE, Api.VENDOR + "/**")
                                                .hasAnyAuthority(ADMIN_DELETE.name(), VENDOR_DELETE.name())
                                                .anyRequest().authenticated())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
                return httpSecurity.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
                configuration.setAllowCredentials(true);
                configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
                configuration.setAllowedOrigins(Arrays.asList(Api.FRONTEND));
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }
}
