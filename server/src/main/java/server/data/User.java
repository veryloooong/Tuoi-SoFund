// TODO: Quan tâm sau
package server.data;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class User {
    private long userId;

    private String username;
    private String email;

    public User(String username, String email) {
        this.setUsername(username);
        this.setEmail(email);
    }
}
