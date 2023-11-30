package server.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import server.data.Course;
import server.service.course.CourseService;

@RestController
@RequestMapping(path = "/api/v1/courses")
public class CourseController {
  @Autowired
  private CourseService courseService;

  @GetMapping(value = "/all")
  public @ResponseBody Iterable<Course> getAllCourses() {
    return courseService.findAllCourses();
  }

  @GetMapping(value = "/{id}")
  public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
    Optional<Course> course = courseService.findCourseById(id);

    if (course.isPresent()) {
      return new ResponseEntity<Course>(course.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody Course createCourse(@RequestBody Course newCourse) {
    return courseService.create(newCourse);
  }
}
