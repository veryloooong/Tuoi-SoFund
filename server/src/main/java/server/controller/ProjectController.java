package server.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import server.data.Project;
import server.service.project.ProjectService;

@RestController
@CrossOrigin
@RequestMapping(path = "/api/v1/projects")
public class ProjectController {
  @Autowired
  private ProjectService projectService;

  @GetMapping(path = "/all")
  public @ResponseBody Iterable<Project> getAllProjects() {
    return projectService.findAllProjects();
  }

  @GetMapping(path = "/{id}")
  public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
    Optional<Project> project = projectService.findProjectById(id);

    if (project.isPresent()) {
      return new ResponseEntity<Project>(project.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}
