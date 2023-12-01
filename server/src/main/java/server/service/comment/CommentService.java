package server.service.comment;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import server.data.Comment;
import server.repository.comment.CommentRepository;

public class CommentService implements ICommentService {
  @Autowired
  private CommentRepository commentRepository;

  @Override
  public Comment create(Comment comment) {
    return commentRepository.save(comment);
  }
  
  @Override
  public Optional<Comment> getCommentById(Long id) {
    return commentRepository.findById(id);
  }
  
  @Override
  public List<Comment> getCommentsToProject(Long projectId) {
    return commentRepository.findByProjectId(projectId);
  }
  
  @Override
  public void delete(Long commentId) {
    commentRepository.deleteById(commentId);
  }
}
