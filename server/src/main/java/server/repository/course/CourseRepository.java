package server.repository.course;

import org.springframework.data.jpa.repository.JpaRepository;

import server.data.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
