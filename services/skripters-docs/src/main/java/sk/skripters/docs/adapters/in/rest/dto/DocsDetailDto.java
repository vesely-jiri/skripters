package sk.skripters.docs.adapters.in.rest.dto;

public record DocsDetailDto(
        int id,
        String type,
        String title,
        String description,
        String addon,
        String addonVersion,
        String[] syntaxes,
        String[] eventValues,
        String[] usableIn,
        String since
) {}