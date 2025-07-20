package sk.skripters.docs.application.service;

import org.springframework.stereotype.Service;
import sk.skripters.docs.application.ports.in.GetDocsBasicsQuery;
import sk.skripters.docs.application.ports.out.LoadAllDocsBasicsPort;
import sk.skripters.docs.domain.Documentation;

import java.util.List;

@Service
public class GetBasicDocsService implements GetDocsBasicsQuery {

    private final LoadAllDocsBasicsPort loadPort;

    public GetBasicDocsService(LoadAllDocsBasicsPort loadPort) {
        this.loadPort = loadPort;
    }

    @Override
    public List<Documentation> getAllNodes() {
        return loadPort.loadAllNodes().stream()
                .map(doc -> new Documentation(
                        doc.getId(),
                        doc.getType(),
                        doc.getTitle(),
                        doc.getDescription(),
                        doc.getAddon(),
                        doc.getAddonVersion(),
                        doc.getSyntaxes(),
                        doc.getEventValues(),
                        doc.getUsableIn(),
                        doc.getSince()
                )).toList();
    }

    @Override
    public Documentation getNode(int id) {
        return loadPort.loadAllNodes().stream()
                .filter(doc -> doc.getId() == id)
                .findFirst()
                .orElse(null);
    }
}