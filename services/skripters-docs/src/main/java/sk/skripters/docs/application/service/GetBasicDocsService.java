package sk.skripters.docs.application.service;

import org.springframework.stereotype.Service;
import sk.skripters.docs.adapters.in.rest.dto.DocsBasicDto;
import sk.skripters.docs.application.ports.in.GetDocsBasicsQuery;
import sk.skripters.docs.application.ports.out.LoadAllDocsBasicsPort;

import java.util.List;

@Service
public class GetBasicDocsService implements GetDocsBasicsQuery {

    private final LoadAllDocsBasicsPort loadPort;

    public GetBasicDocsService(LoadAllDocsBasicsPort loadPort) {
        this.loadPort = loadPort;
    }

    @Override
    public List<DocsBasicDto> geAll() {
        return loadPort.loadAll().stream()
                .map(doc -> new DocsBasicDto(
                        doc.id(),
                        doc.type(),
                        doc.title(),
                        doc.description(),
                        doc.addon())).toList();
    }
}