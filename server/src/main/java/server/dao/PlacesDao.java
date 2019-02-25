package server.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import server.dto.PlacesDto;

import java.util.List;

public class PlacesDao implements PlacesDaoInterface<PlacesDto, Integer> {

    private Session currentSession;
    private Transaction currentTransaction;

    public PlacesDao() {

    }

    public Session openCurrentSession() {
        currentSession = getSessionFactory().openSession();
        return currentSession;
    }

    public Session openCurrentSessionWithTransaction() {
        currentSession = getSessionFactory().openSession();
        currentTransaction = currentSession.beginTransaction();
        return currentSession;
    }

    public void closeCurrentSession() {
        currentSession.close();
    }

    public void closeCurrentSessionWithTransaction() {
        currentTransaction.commit();
        currentSession.close();
    }

    private static SessionFactory getSessionFactory() {
        Configuration cfg = new Configuration().configure();
        StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder()
                .applySettings(cfg.getProperties());
        SessionFactory sessionFactory = cfg.buildSessionFactory(builder.build());

        return sessionFactory;
    }

    public Session getCurrentSession() {
        return currentSession;
    }

    public void setCurrentSession(Session currentSession) {
        this.currentSession = currentSession;
    }

    public Transaction getCurrentTransaction() {
        return currentTransaction;
    }

    public void setCurrentTransaction(Transaction currentTransaction) {
        this.currentTransaction = currentTransaction;
    }

    @Override
    public void save(PlacesDto entity) {
        getCurrentSession().save(entity);
    }

    @Override
    public void update(PlacesDto entity) {
        getCurrentSession().update(entity);
    }

    @Override
    public PlacesDto findById(Integer id) {
        PlacesDto place = (PlacesDto) getCurrentSession().get(PlacesDto.class, id);
        return place;
    }

    @Override
    public void delete(PlacesDto entity) {
        getCurrentSession().delete(entity);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<PlacesDto> findAll() {
        List<PlacesDto> places = (List<PlacesDto>) getCurrentSession().createQuery("from places").list();
        return places;
    }

}
