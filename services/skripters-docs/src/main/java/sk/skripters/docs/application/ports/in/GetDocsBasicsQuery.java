package sk.skripters.docs.application.ports.in;

import sk.skripters.docs.domain.Documentation;

import java.util.List;

public interface GetDocsBasicsQuery {
    List<Documentation> getAllNodes();
    Documentation getNode(int id);
}
