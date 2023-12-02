package server.repository.update;

import org.springframework.data.jpa.repository.JpaRepository;

import server.data.Update;
import java.util.List;

public interface UpdateRepository extends JpaRepository<Update, Long> {
  List<Update> findByProjectId(Long projectId);
}
