package SoaProject.SoaProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import SoaProject.SoaProject.model.Enseignant;

public interface EnseignantRepo extends JpaRepository<Enseignant,Long> {
    
}