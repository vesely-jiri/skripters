package sk.skripters.docs.adapters.out.persistence;


import org.springframework.data.jpa.repository.JpaRepository;

public interface DocsJpaRepository extends JpaRepository<DocsJpaEntity, Integer> {

}
