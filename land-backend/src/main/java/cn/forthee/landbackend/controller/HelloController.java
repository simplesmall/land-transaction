package cn.forthee.landbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author 简小
 * @create 2020-07-18 18:46
 */
@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/test")
    public String helloTest(){
        return "Hello world";
    }
}
