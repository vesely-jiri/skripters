package sk.skripters.docs.adapters.out.persistence;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "documentation")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DocsJpaEntity {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private int id;

    private String type;
    private String title;
    private String description;
    private String addon;

    @Column(name = "addon_version")
    private String addonVersion;
    private String[] syntaxes;

    @Column(name = "event_values")
    private String[] eventValues;

    @Column(name = "usable_in")
    private String[] usableIn;
    private String since;
}
