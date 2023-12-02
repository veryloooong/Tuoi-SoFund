package server.service.update;

import java.util.List;
import java.util.Optional;

import server.data.Update;

public interface IUpdateService {
  // create
  Update create(Update update);

  // read
  Optional<Update> findById(Long id);

  List<Update> findByProjectId(Long projectId);

  // delete
  void delete(Long id);
}
