package server.service.course;

import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.data.Course;
import server.repository.course.CourseRepository;

@Service
public class CourseService implements ICourseService {
  @Autowired
  private CourseRepository courseRepository;

  @Override
  public Course create(Course course) {
    return courseRepository.save(course);
  }

  @Override
  public Optional<Course> findCourseById(Long id) {
    return courseRepository.findById(id);
  }

  @Override
  public Iterable<Course> findAllCourses() {
    return courseRepository.findAll();
  }

  @Override
  public Course update(Long courseId, Course newCourse) {
    Course courseDB = courseRepository.findById(courseId).get();

    if (Objects.nonNull(newCourse.getTitle()) && !"".equalsIgnoreCase(newCourse.getTitle())) {
      courseDB.setTitle(newCourse.getTitle());
    }

    if (Objects.nonNull(newCourse.getDescription()) && !"".equalsIgnoreCase(newCourse.getDescription())) {
      courseDB.setDescription(newCourse.getDescription());
    }

    if (Objects.nonNull(newCourse.getPrice())) {
      courseDB.setPrice(newCourse.getPrice());
    }

    return courseRepository.save(courseDB);
  }

  @Override
  public void delete(Long courseId) {
    courseRepository.deleteById(courseId);
  }
}
