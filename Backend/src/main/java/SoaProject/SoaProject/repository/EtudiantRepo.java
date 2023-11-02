package SoaProject.SoaProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import SoaProject.SoaProject.model.Etudiant;

    public interface EtudiantRepo extends JpaRepository<Etudiant, Long> {
        Etudiant findByEmail(String email );



}

