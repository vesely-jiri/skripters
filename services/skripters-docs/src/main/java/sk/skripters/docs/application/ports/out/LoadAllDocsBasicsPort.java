package sk.skripters.docs.application.ports.out;

import sk.skripters.docs.domain.Documentation;

import java.util.List;

public interface LoadAllDocsBasicsPort {
    List<Documentation> loadAllNodes();
    Documentation loadNode(int id);
}
