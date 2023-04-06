package com.services;

import com.model.Company;

import java.util.List;

public interface CompanyService {
    Company createCompany(Company company);

    Company getCompanyById(int id);

//    Company getCompanyByName(String companyName);

    List<Company> getAllCompanies();

    Company updateCompany(Company company);

    Company deleteCompany(int id);

}