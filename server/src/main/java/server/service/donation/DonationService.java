package server.service.donation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import server.data.Donation;
import server.repository.donation.DonationRepository;

public class DonationService implements IDonationService {
  @Autowired
  private DonationRepository donationRepository;

  @Override
  public Donation create(Donation donation) {
    return donationRepository.save(donation);
  }
  
  @Override
  public Optional<Donation> findDonationById(Long id) {
    return donationRepository.findById(id);
  }
  
  @Override
  public List<Donation> findDonationsByUser(Long userId) {
    return donationRepository.findByUserId(userId);
  }
  
  @Override
  public List<Donation> findDonationsToProject(Long projectId) {
    return donationRepository.findByProjectId(projectId);
  }
}
