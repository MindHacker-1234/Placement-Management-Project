package com.controller;

import com.model.Company;
import com.services.CompanyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value="http://127.0.0.1:5500")
@RequestMapping(value = "/company")
public class CompanyController {
    @Autowired
    CompanyService companyService;

    private static final Logger logger = LoggerFactory.getLogger(CompanyController.class);


    @GetMapping("/display")
    public List<Company> getAllCompanies() {
        logger.info("companieslist");
        return companyService.getAllCompanies();
    }

    @PostMapping("/create")
    public Company createCompany(@RequestBody Company company) {
        logger.info("Create company is invoked {}", company);
        return companyService.createCompany(company);
    }

    @GetMapping("/{id}")
    public Company getCompanyById(@PathVariable("id") int id) {
        logger.info("getCompanyById is invoked with  Id: {}", id);
        return companyService.getCompanyById(id);

    }
//    @GetMapping("/name/{companyName}")
//    public Company getCompanyByName(@PathVariable("companyName") String companyName){
//        logger.info("getCompanyByName is invoked with  name: {}", companyName);
//        return companyService.getCompanyByName(companyName);
//
//    }

    @PutMapping("/update")
    public Company updateCompany(@RequestBody Company company) {
        return companyService.updateCompany(company);

    }

    @DeleteMapping("/{id}")
    public Company deleteCompany(@PathVariable("id") int id) {
        return companyService.deleteCompany(id);
    }

}
