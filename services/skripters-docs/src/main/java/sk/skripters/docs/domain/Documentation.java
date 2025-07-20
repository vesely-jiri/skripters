package sk.skripters.docs.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class Documentation {
    private final int id;
    private final String type;
    private final String title;
    private final String description;
    private final String addon;
    private final String addonVersion;
    private final String[] syntaxes;
    private final String[] eventValues;
    private final String[] usableIn;
    private final String since;
}