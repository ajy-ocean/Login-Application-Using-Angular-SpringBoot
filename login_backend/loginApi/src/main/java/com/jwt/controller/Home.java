package com.jwt.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {

    @RequestMapping("/welcome")
    public String welcome(){
        String text = "Private Page";
        text += " Not Allowed For Unuthenticated User";
        return text;
    }

    @RequestMapping("/getusers")
    public String getUser(){
        return "{\"name\":\"test\"}";
    }
}
