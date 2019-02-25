package server.services;

import server.dao.PlacesDao;
import server.dto.PlacesDto;

import java.util.List;

public class PlacesService {

    private static PlacesDao placesDao;

    public PlacesService() {
        placesDao = new PlacesDao();
    }

    public void save(PlacesDto entity) {
        placesDao.openCurrentSessionWithTransaction();
        placesDao.save(entity);
        placesDao.closeCurrentSessionWithTransaction();
    }

    public void update(PlacesDto entity) {
        placesDao.openCurrentSessionWithTransaction();
        placesDao.save(entity);
        placesDao.closeCurrentSessionWithTransaction();
    }

    public PlacesDto findById(Integer id) {
        placesDao.openCurrentSession();
        PlacesDto place = placesDao.findById(id);
        placesDao.closeCurrentSession();
        return place;
    }

    public void delete(Integer id) {
        placesDao.openCurrentSessionWithTransaction();
        PlacesDto place = placesDao.findById(id);
        placesDao.delete(place);
        placesDao.closeCurrentSessionWithTransaction();
    }

    public List<PlacesDto> findAll(){
        placesDao.openCurrentSession();
        List<PlacesDto> places = placesDao.findAll();
        placesDao.closeCurrentSession();
        return  places;
    }

    public PlacesDao placesDao() {
        return placesDao;
    }
}
