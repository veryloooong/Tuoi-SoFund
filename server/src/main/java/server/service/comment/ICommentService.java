package server.service.comment;

import java.util.List;
import java.util.Optional;

import server.data.Comment;

public interface ICommentService {
  // create
  Comment create(Comment comment);

  // read
  Optional<Comment> getCommentById(Long id);

  List<Comment> getCommentsToProject(Long projectId);
  
  // delete
  void delete(Long commentId);
}
