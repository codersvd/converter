package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import server.dto.PlacesDto;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "places", path = "places")
public interface PlacesRepository extends JpaRepository<PlacesDto, Integer> {

    List<PlacesDto> findAllByStatus(@Param("status") byte status);
}
