package sk.skripters.docs.adapters.in.rest.dto;

public record DocsBasicDto (
        int id,
        String type,
        String title,
        String description,
        String addon
) {}
