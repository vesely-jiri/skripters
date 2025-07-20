package sk.skripters.docs.adapters.in.rest.mapper;

import org.springframework.stereotype.Component;
import sk.skripters.docs.adapters.in.rest.dto.DocsDetailDto;
import sk.skripters.docs.domain.Documentation;

@Component
public class DocsDetailDtoMapper {
    public DocsDetailDto toDetailDto(Documentation doc) {
        return new DocsDetailDto(
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
        );
    }
}
