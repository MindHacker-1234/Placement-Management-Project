package com.services;

import com.controller.CompanyController;
import com.controller.VisitController;
import com.model.Company;
import com.model.Student;
import com.model.Visit;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import java.util.List;
@Service
public class VisitServiceImpl implements VisitService {

    @Autowired
    private SessionFactory sessionFactory;

    private static final Logger logger = LoggerFactory.getLogger(VisitController.class);
    public Visit createVisit(Visit visit) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(visit);
        transaction.commit();
        session.close();
        return visit;
    }

    public Visit getVisitById(int id) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Visit visit = session.get(Visit.class,id);
        transaction.commit();
        session.close();
        return visit;
    }

    public List<Visit> getAllVisits() {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Visit> visitList = session.createQuery("from Visit", Visit.class).list();
        transaction.commit();
        session.close();
        return visitList;
    }

    public Visit updateVisit(Visit visit) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.saveOrUpdate(visit);
        transaction.commit();
        session.close();
        return visit;
    }
    public Visit deleteVisit(int id) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Visit visit = session.get(Visit.class, id);
        session.delete(visit);
        transaction.commit();
        session.close();
        return visit;
    }
}
