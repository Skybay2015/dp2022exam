package exam2022.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import exam2022.data3.Data3;

@RepositoryRestResource
@CrossOrigin(origins = "*")

public interface Table8Repository extends JpaRepository<Data3, Integer> {


}
