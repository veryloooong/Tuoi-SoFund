package server.service.project;

import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.data.Project;
import server.repository.project.ProjectRepository;

@Service
public class ProjectService implements IProjectService {
  @Autowired
  private ProjectRepository projectRepository;

  @Override
  public Project create(Project project) {
    return projectRepository.save(project);
  }

  @Override
  public Optional<Project> findProjectById(Long id) {
    return projectRepository.findById(id);
  }

  @Override
  public Iterable<Project> findAllProjects() {
    return projectRepository.findAll();
  }

  @Override
  public Project update(Long projectId, Project newProject) {
    Project projectDB = projectRepository.findById(projectId).get();
    
    if (Objects.nonNull(newProject.getTitle()) && !"".equalsIgnoreCase(newProject.getTitle())) {
      projectDB.setTitle(newProject.getTitle());
    }

    if (Objects.nonNull(newProject.getDescription()) && !"".equalsIgnoreCase(newProject.getDescription())) {
      projectDB.setDescription(newProject.getDescription());
    }

    if (Objects.nonNull(newProject.getStartDate())) {
      projectDB.setStartDate(newProject.getStartDate());
    }

    if (Objects.nonNull(newProject.getEndDate())) {
      projectDB.setEndDate(newProject.getEndDate());
    }

    if (Objects.nonNull(newProject.getGoalFund())) {
      projectDB.setGoalFund(newProject.getGoalFund());
    }

    return newProject;
  }

  @Override
  public void delete(Long projectId) {
    projectRepository.deleteById(projectId);
  }
}
