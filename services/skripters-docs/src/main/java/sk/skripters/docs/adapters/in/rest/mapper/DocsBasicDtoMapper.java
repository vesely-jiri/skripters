package sk.skripters.docs.adapters.in.rest.mapper;

import org.springframework.stereotype.Component;
import sk.skripters.docs.adapters.in.rest.dto.DocsBasicDto;
import sk.skripters.docs.domain.Documentation;

@Component
public class DocsBasicDtoMapper {
    public DocsBasicDto toBasicDto(Documentation doc) {
        return new DocsBasicDto(
                doc.getId(),
                doc.getType(),
                doc.getTitle(),
                doc.getDescription(),
                doc.getAddon());
    }
}
