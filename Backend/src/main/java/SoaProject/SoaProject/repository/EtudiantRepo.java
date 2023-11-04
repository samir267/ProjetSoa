package SoaProject.SoaProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import SoaProject.SoaProject.model.Etudiant;

    public interface EtudiantRepo extends JpaRepository<Etudiant, Long> {
        Etudiant findByEmail(String email);
  @Query("SELECT COUNT(e) FROM Etudiant e WHERE e.absent = true")
    long countAbsentEtudiants();

    @Query("SELECT COUNT(e) FROM Etudiant e WHERE e.absent = false")
    long countPresentEtudiants();
}

