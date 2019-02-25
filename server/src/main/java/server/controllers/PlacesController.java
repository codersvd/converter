package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.dto.PlacesDto;
import server.services.PlacesService;

import java.util.List;

@RestController
@RequestMapping("/places")
@CrossOrigin
public class PlacesController {
    private  PlacesService ps = new PlacesService();

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public List<PlacesDto> places(){
        return ps.findAll();
    }
}
