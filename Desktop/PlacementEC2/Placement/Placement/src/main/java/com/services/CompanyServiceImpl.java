package com.services;

import com.model.Company;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CompanyServiceImpl implements CompanyService {
      @Autowired
      private SessionFactory sessionFactory;
    public Company createCompany(Company company) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(company);
        transaction.commit();
        session.close();
        return company;
    }

    public Company getCompanyById(int id) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Company company = session.get(Company.class,id);
        transaction.commit();
        session.close();
        return company;
    }

//    public Company getCompanyByName(String companyName) {
//        Session session = sessionFactory.openSession();
//        Transaction transaction = session.beginTransaction();
//        Company company = session.get(Company.class,companyName);
//        transaction.commit();
//        session.close();
//        return company;
//    }

    public List<Company> getAllCompanies() {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Company> companyList = session.createQuery("from Company", Company.class).list();
        transaction.commit();
        session.close();
        return companyList;
    }

    public Company updateCompany(Company company) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.saveOrUpdate(company);
        transaction.commit();
        session.close();
        return company;
    }

    public Company deleteCompany(int id) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Company company = session.get(Company.class, id);
        session.delete(company);
        transaction.commit();
        session.close();
        return company;
    }
}
