package server.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/temperature")
@CrossOrigin
public class Temperature{

    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public String tempe() {

        return "Hello world";
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    @ResponseBody
    public HashMap<Number, String> temp() {
        HashMap<Number, String> num = new HashMap<>();
        num.put(3, "dasds");
        num.put(423, "hello");
        return num;
    }
}
