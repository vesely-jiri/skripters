package sk.skripters.docs.adapters.out.persistence;

import org.springframework.stereotype.Component;
import sk.skripters.docs.application.ports.out.LoadNodesPort;
import sk.skripters.docs.domain.Documentation;

import java.util.List;

@Component
public class DocsPersistenceAdapter implements LoadNodesPort {

    private final DocsJpaRepository repository;

    public DocsPersistenceAdapter(DocsJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Documentation> findAll() {
        return repository.findAll().stream()
                .map(entity -> new Documentation(
                        entity.getId(),
                        entity.getType(),
                        entity.getTitle(),
                        entity.getDescription(),
                        entity.getAddon(),
                        entity.getAddonVersion(),
                        entity.getSyntaxes(),
                        entity.getEventValues(),
                        entity.getUsableIn(),
                        entity.getSince()
                ))
                .toList();
    }

    @Override
    public Documentation findById(int id) {
        return repository.findById(id)
                .map(entity -> new Documentation(
                        entity.getId(),
                        entity.getType(),
                        entity.getTitle(),
                        entity.getDescription(),
                        entity.getAddon(),
                        entity.getAddonVersion(),
                        entity.getSyntaxes(),
                        entity.getEventValues(),
                        entity.getUsableIn(),
                        entity.getSince()
                )).orElse(null);
    }
}
