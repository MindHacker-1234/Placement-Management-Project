package com.services;

import com.model.Placements;
import com.model.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PlacementsServiceImpl implements PlacementsService{

    @Autowired
    private SessionFactory sessionFactory;
    public Placements createPlacement(Placements placement) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(placement);
        transaction.commit();
        session.close();
        return placement;
    }

    public Placements getPlacementById(int id) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Placements placement = session.get(Placements.class,id);
        transaction.commit();
        session.close();
        return placement;
    }

    public List<Placements> getAllPlacements() {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Placements> placementList = session.createQuery("from Placements", Placements.class).list();
        transaction.commit();
        session.close();
        return placementList;
    }

    public Placements updatePlacement(Placements placement) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.saveOrUpdate(placement);
        transaction.commit();
        session.close();
        return placement;
    }

    public Placements deletePlacement(int id) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Placements placement = session.get(Placements.class, id);
        session.delete(placement);
        transaction.commit();
        session.close();
        return placement;
    }
}
