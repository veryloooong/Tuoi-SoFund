package server.repository.donation;

import org.springframework.data.jpa.repository.JpaRepository;

import server.data.Donation;
import java.util.List;


public interface DonationRepository extends JpaRepository<Donation, Long> {
  List<Donation> findByProjectId(Long projectId);
  List<Donation> findByUserId(Long userId);
}