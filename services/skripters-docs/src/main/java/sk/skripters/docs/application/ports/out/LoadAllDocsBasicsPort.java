package sk.skripters.docs.application.ports.out;

import sk.skripters.docs.adapters.in.rest.dto.DocsBasicDto;

import java.util.List;

public interface LoadAllDocsBasicsPort {
    List<DocsBasicDto> loadAll();
}
