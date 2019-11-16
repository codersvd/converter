package server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.repositories.PlacesRepository;
import server.dto.PlacesDto;

import java.util.List;

@Service
public class PlacesService {

    private PlacesRepository placesDao;

    @Transactional
    public void save(PlacesDto entity) {
        placesDao.save(entity);
    }

    @Transactional
    public void update(PlacesDto entity) {
        placesDao.save(entity);
    }

    @Transactional
    public PlacesDto findById(Integer id) {
        return placesDao.findById(id).orElse(null);
    }

    @Transactional
    public long countByAlias(String alias) {
        long countPlaces = placesDao.countByAlias(alias);
        return countPlaces;
    }

    @Transactional
    public void delete(Integer id) {
        PlacesDto place = placesDao.findById(id).orElse(null);
        placesDao.delete(place);
    }

    @Transactional
    public List<PlacesDto> findAll(){
        List<PlacesDto> places = placesDao.findAll();
        return  places;
    }

}
