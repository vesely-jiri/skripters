package sk.skripters.docs.application.ports.in;

import sk.skripters.docs.adapters.in.rest.dto.DocsBasicDto;

import java.util.List;

public interface GetDocsBasicsQuery {
    List<DocsBasicDto> geAll();
}
