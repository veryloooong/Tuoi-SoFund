package server.repository.comment;

import org.springframework.data.jpa.repository.JpaRepository;

import server.data.Comment;
import java.util.List;


public interface CommentRepository extends JpaRepository<Comment, Long> {
  List<Comment> findByProjectId(Long projectId);
}