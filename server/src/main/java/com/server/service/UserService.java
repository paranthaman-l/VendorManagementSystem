package com.server.service;

import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.server.controller.OtpController;
import com.server.dto.UserDTO;
import com.server.model.User;
import com.server.repository.UserRepository;
import com.server.util.PasswordUtils;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    // @Autowired
    // private OtpController otpController;

    public String signup(User user) throws IOException {

        String password = PasswordUtils.encryptPassword(user.getPassword());
        String uid = UUID.randomUUID().toString();

        user.setPassword(password);
        user.setUid(uid);
        // otpController.sendOtp(user.getEmail(),user.getUsername());
        userRepository.save(user);
        return uid;
    }

    public String login(String email, String password) {
        User userEmail = userRepository.findByEmail(email);

        if (userEmail != null)
            if (PasswordUtils.matchPassword(password, userEmail.getPassword()))
                return userEmail.getUid();
            else
                return "Invalid Password";
        else
            return "Email Not Register";
    }

    public boolean isExistEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return false;
        }
        return true;
    }

    public UserDTO getUser(String uid) {
        User user = userRepository.findById(uid).get();
        UserDTO userDTO = new UserDTO();
        BeanUtils.copyProperties(user, userDTO, "password");
        return userDTO;
    }

    public UserDTO getUserDTOByEmail(String email) {
        User user = userRepository.findByEmail(email);
        UserDTO userDTO = new UserDTO();
        BeanUtils.copyProperties(user, userDTO, "password");
        return userDTO;
    }
}
