package SoaProject.SoaProject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import SoaProject.SoaProject.model.Enseignant;
import SoaProject.SoaProject.model.Etudiant;
import SoaProject.SoaProject.repository.EnseignantRepo;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

@Service
public class EnseignantService {

    @Autowired
    private EnseignantRepo enseignantRepository;

    public List<Enseignant> getAllEnseignants() {
        return enseignantRepository.findAll();
    }

    public Optional<Enseignant> getEnseignantById(Long id) {
        return enseignantRepository.findById(id);
    }

     public Enseignant createEnseignant(Enseignant enseignant) throws Exception {
        Enseignant existingEtudiant = enseignantRepository.findByEmail(enseignant.getEmail());
    
        if (existingEtudiant != null) {
            throw new Exception("Email already exists.");
        }
    
        return enseignantRepository.save(enseignant);
    }

   public Enseignant updateEnseignant(Long id, Enseignant enseignant) {
        if (enseignantRepository.existsById(id)) {
            Enseignant existingEnseignant = enseignantRepository.findById(id).get();
            if (!existingEnseignant.getEmail().equals(enseignant.getEmail()) && enseignantRepository.existsByEmail(enseignant.getEmail())) {
                throw new EntityExistsException("E-mail already exists in the database");
            }

            enseignant.setId(id);
            return enseignantRepository.save(enseignant);
        } else {
            throw new EntityNotFoundException("Enseignant with ID " + id + " not found");
        }
    }


    public void deleteEnseignant(Long id) {
        enseignantRepository.deleteById(id);
    }
}
