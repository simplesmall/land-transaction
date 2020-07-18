package cn.forthee.landbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

/**
 * @author 简小
 * @create 2020-07-18 18:46
 */
@RestController
@RequestMapping("/api")
public class HelloController {
    String name = "张家大小姐,黄花大闺女";
    @GetMapping("/get")
    public String helloTest(){
        return this.name;
    }
    @PostMapping("/set")
    public String setName(HttpServletResponse response, @PathParam("name") String Name){

        return  "this.name"+this.name+"=>"+Name;
    }
}
