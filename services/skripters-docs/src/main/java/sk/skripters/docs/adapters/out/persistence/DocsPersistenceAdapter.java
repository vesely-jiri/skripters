package sk.skripters.docs.adapters.out.persistence;

import org.springframework.stereotype.Component;
import sk.skripters.docs.application.ports.out.LoadAllDocsBasicsPort;
import sk.skripters.docs.domain.Documentation;

import java.util.List;

@Component
public class DocsPersistenceAdapter implements LoadAllDocsBasicsPort {

    private final DocsJpaRepository repository;

    public DocsPersistenceAdapter(DocsJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Documentation> loadAllDocsBasics() {
        return repository.findAll().stream()
                .map(entity -> new Documentation(
                        entity.getId(),
                        entity.getType(),
                        entity.getTitle(),
                        entity.getDescription(),
                        entity.getAddon()
                ))
                .toList();
    }

}
