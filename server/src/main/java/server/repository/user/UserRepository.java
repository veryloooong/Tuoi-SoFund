// TODO: Worry about this later
package server.repository.user;

import server.data.User;

public interface UserRepository {
    // create
    User createUser(String name, String email);

    // read
    User findUserById(long userId);

    User findUserByUsername(String username);

    // update
    void updateUserUsername(long id, String newUsername);

    void updateUserEmail(long id, String newEmail);

    // delete
    void removeUser(long id);
}
