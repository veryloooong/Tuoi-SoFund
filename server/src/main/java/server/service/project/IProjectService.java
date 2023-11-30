package server.service.project;

import java.util.Optional;

import server.data.Project;

public interface IProjectService {
  Project create(Project project);

  Optional<Project> findProjectById(Long id);

  Iterable<Project> findAllProjects();

  Project update(Long projectId, Project newProject);

  void delete(Long projectId);
}
