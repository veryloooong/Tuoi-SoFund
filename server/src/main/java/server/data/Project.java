package server.data;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.experimental.Accessors;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "projects")
public class Project {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;
  private String description;
  @JsonFormat(pattern = "dd/MM/yyyy")
  private LocalDate startDate;
  @JsonFormat(pattern = "dd/MM/yyyy")
  private LocalDate endDate;
  private String provider;
  private Long currentFund;
  private Long goalFund;
}
