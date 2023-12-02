package server.service.update;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.data.Update;
import server.repository.update.UpdateRepository;

@Service
public class UpdateService implements IUpdateService {
  @Autowired
  private UpdateRepository updateRepository;

  @Override
  public Update create(Update update) {
    return updateRepository.save(update);
  }

  @Override
  public Optional<Update> findById(Long id) {
    return updateRepository.findById(id);
  }

  @Override
  public List<Update> findByProjectId(Long projectId) {
    return updateRepository.findByProjectId(projectId);
  }

  @Override
  public void delete(Long id) {
    updateRepository.deleteById(id);
  }
}
