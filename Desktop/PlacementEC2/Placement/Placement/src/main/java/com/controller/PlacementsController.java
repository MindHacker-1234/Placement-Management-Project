package com.controller;

import com.model.Placements;
import com.model.Visit;
import com.services.PlacementsService;
import com.services.VisitService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(value="*")
@RequestMapping(value = "/placement")
public class PlacementsController {

    @Autowired
    PlacementsService placementService;

    private static final Logger logger = LoggerFactory.getLogger(PlacementsController.class);


    @GetMapping("/display")
    public List<Placements> getAllPlacements() {
        logger.info("Placementslist");
        return placementService.getAllPlacements();
    }

    @PostMapping("/create")
    public Placements createPlacement(@RequestBody Placements placement) {
        logger.info("Create placement is invoked {}", placement);
        return placementService.createPlacement(placement);
    }

    @GetMapping("/{id}")
    public Placements getPlacementById(@PathVariable("id") int id) {
        logger.info("getVisitById is invoked with  routeId: {}", id);
        return placementService.getPlacementById(id);

    }

    @PutMapping("/update")
    public Placements updatePlacement(@RequestBody Placements placement) {
        return placementService.updatePlacement(placement);

    }

    @DeleteMapping("/{id}")
    public Placements deletePlacement(@PathVariable("id") int id) {
        return placementService.deletePlacement(id);
    }


}
