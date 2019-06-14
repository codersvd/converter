package server.repositories;

import org.hibernate.annotations.Where;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import server.dto.PlacesDto;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "places", path = "places")
public interface PlacesRepository extends JpaRepository<PlacesDto, Integer> {

    //@Query("SELECT id, name, status FROM places WHERE status=1")
    List<PlacesDto> findAll();

    List<PlacesDto> findAllByStatus(@Param("status") byte status);
}
