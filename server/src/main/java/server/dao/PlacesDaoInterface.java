package server.dao;

import java.io.Serializable;
import java.util.List;

public interface PlacesDaoInterface<T, Id extends Serializable> {

    public void save(T entity);

    public void update(T entity);

    public T findById(Id id);

    public void delete(T entity);

    public List<T> findAll();
}
