package sk.skripters.docs.application.ports.out;

import sk.skripters.docs.domain.Documentation;

import java.util.List;

public interface LoadNodesPort {
    List<Documentation> findAll();
    Documentation findById(int id);
}
