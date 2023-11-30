package server.repository.project;

import org.springframework.data.jpa.repository.JpaRepository;

import server.data.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
