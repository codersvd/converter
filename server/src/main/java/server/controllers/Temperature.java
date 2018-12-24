package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.services.TempService;

import java.util.*;

@RestController
@RequestMapping("/temperature")
@CrossOrigin
public class Temperature{

    private final TempService tempService;

    @Autowired
    public Temperature(TempService tempService) {
        assert tempService != null;
        this.tempService = tempService;
    }

    @RequestMapping(value="/{temp}", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Double> AllTemps(@PathVariable("temp") Double temp) {
        return tempService.getAllTemps(temp);
    }

    @RequestMapping(value="/far/{temp}", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Double> tempFar(@PathVariable("temp") Double temp) {
        return tempService.tempToFar(temp);
    }

    @RequestMapping(value="/kel/{temp}", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Double> tempKel(@PathVariable("temp") Double temp) {
        return tempService.tempToKel(temp);
    }
}
