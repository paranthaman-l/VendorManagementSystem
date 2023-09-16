package com.server.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.dto.UserDTO;
import com.server.model.User;
import com.server.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
    @Autowired private UserService userService;
    
    @GetMapping("")
    public String index(){
        return "Welcome to User Controller";
    }
    
    @PostMapping("/signup")
    public String signup(@RequestBody User user) throws IOException {
        boolean isExistEmail = userService.isExistEmail(user.getEmail());
        if(!isExistEmail)
            return userService.signup(user);
        else
            return "Already exist Email";
    }

    @GetMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password){
        return userService.login(email,password);
    }

    @GetMapping("/by")
    public UserDTO getUser(@RequestParam String uid) {
        return userService.getUser(uid);
    }

}
