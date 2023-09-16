package com.server.dto;

public class UserDTO {
    private String uid;
    private String username;
    
    private String email;
    private Boolean verified;

       public UserDTO() {
        super();
    }

    public UserDTO(String uid, String username, String email,Boolean verified) {
        this.uid = uid;
        this.username = username;
        this.email = email;
        this.verified = verified;
    }

    public String getUid() {
        return uid;
    }
    public void setUid(String uid) {
        this.uid = uid;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Boolean getVerified() {
        return verified;
    }
    public void setVerified(Boolean verified) {
        this.verified = verified;
    }

}
