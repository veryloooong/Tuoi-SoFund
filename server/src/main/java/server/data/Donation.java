// TODO: Quan tâm sau
package server.data;

import java.util.Date;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Donation {
  private long donationId;
  private long userId;
  private long projectId;
  private Date donationTime;
}
