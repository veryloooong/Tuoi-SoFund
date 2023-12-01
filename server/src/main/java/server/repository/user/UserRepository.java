package server.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;

import server.data.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
