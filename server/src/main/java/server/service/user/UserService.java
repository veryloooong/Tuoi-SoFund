package server.service.user;

import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.data.User;
import server.repository.user.UserRepository;

@Service
public class UserService implements IUserService {
  @Autowired
  private UserRepository userRepository;

  @Override
  public User create(User user) {
    return userRepository.save(user);
  }

  @Override
  public Optional<User> findUserById(Long id) {
    return userRepository.findById(id);
  }

  @Override
  public User update(Long userId, User newUser) {
    User userDB = userRepository.findById(userId).get();

    if (Objects.nonNull(newUser.getName()) && !"".equalsIgnoreCase(newUser.getName())) {
      userDB.setName(newUser.getName());
    }

    if (Objects.nonNull(newUser.getEmail()) && !"".equalsIgnoreCase(newUser.getName())) {
      userDB.setEmail(newUser.getEmail());
    }

    return userRepository.save(userDB);
  }
}
