package com.controller;

import com.model.Company;
import com.model.Visit;
import com.services.CompanyService;
import com.services.VisitService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value="http://127.0.0.1:5500/")
@RequestMapping(value = "/visit")
public class VisitController {

    @Autowired
    VisitService visitService;

    private static final Logger logger = LoggerFactory.getLogger(CompanyController.class);


    @GetMapping("/display")
    public List<Visit> getAllVisits() {
        logger.info("visitslist");
        return visitService.getAllVisits();
    }

    @PostMapping("/create")
    public Visit createVisit(@RequestBody Visit visit) {
        logger.info("Create visit is invoked {}", visit);
        return visitService.createVisit(visit);
    }

    @GetMapping("/{id}")
    public Visit getVisitById(@PathVariable("id") int id) {
        logger.info("getVisitById is invoked with  routeId: {}", id);
        return visitService.getVisitById(id);

    }

    @PutMapping("/update")
    public Visit updateVisit(@RequestBody Visit visit) {
        return visitService.updateVisit(visit);

    }

    @DeleteMapping("/delete/{id}")
    public Visit deleteVisit(@PathVariable("id") int id) {
        return visitService.deleteVisit(id);
    }


}
