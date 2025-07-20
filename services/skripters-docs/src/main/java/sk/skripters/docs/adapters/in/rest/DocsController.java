package sk.skripters.docs.adapters.in.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.skripters.docs.adapters.in.rest.dto.DocsBasicDto;
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
    public ResponseEntity<List<DocsBasicDto>> getAll() {
        return ResponseEntity.ok(service.geAll());
    }

}
