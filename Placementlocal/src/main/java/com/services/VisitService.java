package com.services;

import com.model.Company;
import com.model.Visit;

import java.util.List;

public interface VisitService {

    Visit createVisit(Visit visit);

    Visit getVisitById(int id);



    List<Visit> getAllVisits();

    Visit updateVisit(Visit visit);

    Visit deleteVisit(int id);

}
