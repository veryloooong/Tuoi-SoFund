package server.service.course;

import java.util.Optional;

import server.data.Course;

public interface ICourseService {
  Course create(Course course);

  Optional<Course> findCourseById(Long id);

  Iterable<Course> findAllCourses();

  Course update(Long courseId, Course newCourse);

  void delete(Long courseId);
}
