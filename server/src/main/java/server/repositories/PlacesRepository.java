package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import server.dto.PlacesDto;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "places", path = "places")
public interface PlacesRepository extends JpaRepository<PlacesDto, Integer> {

    //@Query("SELECT id, name, status FROM places WHERE status=1")
    //List<PlacesDto> findAll();

    List<PlacesDto> findById(@Param("id") int id);

    List<PlacesDto> findByAlias(@Param("alias") String alias);

    List<PlacesDto> findAllByStatus(@Param("status") byte status);

    long countByAlias(String alias);
}
