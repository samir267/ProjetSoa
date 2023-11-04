package SoaProject.SoaProject.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import SoaProject.SoaProject.model.Etudiant;
import SoaProject.SoaProject.repository.EtudiantRepo;

@Service
public class EtudiantService {
    private final EtudiantRepo etudiantRepository;

    @Autowired
    public EtudiantService(EtudiantRepo etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }


    public Etudiant createEtudiant(Etudiant etudiant) {
        // Check if an Etudiant with the same email already exists
        if (etudiantRepository.findByEmail(etudiant.getEmail()) != null) {
            throw new RuntimeException("Email already exists"); // You can create a custom exception class for better error handling
        }
    
        return etudiantRepository.save(etudiant);
    }
    
    


    
    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }


    public Optional<Etudiant> getEtudiantById(Long id) {
        return etudiantRepository.findById(id);
    }



    public Etudiant updateEtudiant(Long id, Etudiant updatedEtudiant) {
        Optional<Etudiant> existingEtudiantOptional = etudiantRepository.findById(id);
    
        if (existingEtudiantOptional.isPresent()) {
            Etudiant existingEtudiant = existingEtudiantOptional.get();
            String updatedEmail = updatedEtudiant.getEmail();
    
            // Check if the updated email is unique (not associated with another Etudiant)
            if (updatedEmail == null || updatedEmail.equals(existingEtudiant.getEmail())
                    || etudiantRepository.findByEmail(updatedEmail) == null) {
                existingEtudiant.setNom(updatedEtudiant.getNom());
                existingEtudiant.setPrenom(updatedEtudiant.getPrenom());
                existingEtudiant.setAge(updatedEtudiant.getAge());
                existingEtudiant.setClasse(updatedEtudiant.getClasse());
                existingEtudiant.setAdresse(updatedEtudiant.getAdresse());
                existingEtudiant.setEmail(updatedEtudiant.getEmail());
    
                return etudiantRepository.save(existingEtudiant);
            } else {
                throw new RuntimeException("Email already exists");
            }
        } else {
            throw new EntityNotFoundException("Etudiant with ID " + id + " not found");
        }
    }



    public void deleteEtudiant(Long id) {
        if (etudiantRepository.existsById(id)) {
            etudiantRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Etudiant with ID " + id + " not found");
        }
    }
    public Etudiant toggleAbsentStatus(Long id) {
        Optional<Etudiant> existingEtudiantOptional = etudiantRepository.findById(id);

        if (existingEtudiantOptional.isPresent()) {
            Etudiant existingEtudiant = existingEtudiantOptional.get();
            
            // Check if the "absent" field is null, and initialize it to false if it is.
            if (existingEtudiant.getAbsent() == null) {
                existingEtudiant.setAbsent(false);
            }
            
            existingEtudiant.setAbsent(!existingEtudiant.getAbsent()); // Toggle the absent status
            return etudiantRepository.save(existingEtudiant);
        } else {
            throw new EntityNotFoundException("Etudiant with ID " + id + " not found");
        }
    }
    public long countEtudiants() {
        return etudiantRepository.count();
    }
    public long countAbsentEtudiants() {
        return etudiantRepository.countAbsentEtudiants();
    }

    public long countPresentEtudiants() {
        return etudiantRepository.countPresentEtudiants();
    }
}