package sk.skripters.docs.adapters.in.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sk.skripters.docs.adapters.in.rest.dto.DocsBasicDto;
import sk.skripters.docs.adapters.in.rest.dto.DocsDetailDto;
import sk.skripters.docs.adapters.in.rest.mapper.DocsBasicDtoMapper;
import sk.skripters.docs.adapters.in.rest.mapper.DocsDetailDtoMapper;
import sk.skripters.docs.application.service.GetBasicDocsService;

import java.util.List;

@RestController
@RequestMapping("/docs")
public class DocsController {

    private final GetBasicDocsService service;

    public DocsController(GetBasicDocsService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<DocsBasicDto>> getAllNodes() {
        return ResponseEntity.ok(
                service.getAllNodes().stream()
                        .map(Dto -> new DocsBasicDtoMapper()
                                .toBasicDto(Dto)).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DocsDetailDto> getNode (@RequestParam int id) {
        return ResponseEntity.ok(
                new DocsDetailDtoMapper().toDetailDto(
                        service.getNode(id)));
    }
}
