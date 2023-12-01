package server.service.donation;

import java.util.List;
import java.util.Optional;

import server.data.Donation;

public interface IDonationService {
  // create
  Donation create(Donation donation);

  // read
  Optional<Donation> findDonationById(Long id);

  List<Donation> findDonationsByUser(Long userId);
  
  List<Donation> findDonationsToProject(Long projectId);
}
