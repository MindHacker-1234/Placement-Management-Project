package com.services;

import com.model.Placements;

import java.util.List;

public interface PlacementsService {

    Placements createPlacement(Placements placement);

    Placements getPlacementById(int id);


    List<Placements> getAllPlacements();

    Placements updatePlacement(Placements placement);

    Placements deletePlacement(int id);
}
