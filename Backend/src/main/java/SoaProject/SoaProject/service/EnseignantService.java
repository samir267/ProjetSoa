package SoaProject.SoaProject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import SoaProject.SoaProject.model.Enseignant;
import SoaProject.SoaProject.repository.EnseignantRepo;

import java.util.List;
import java.util.Optional;

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

    public Enseignant createEnseignant(Enseignant enseignant) {
        return enseignantRepository.save(enseignant);
    }

    public Enseignant updateEnseignant(Long id, Enseignant updatedEnseignant) {
        Optional<Enseignant> existingEnseignant = enseignantRepository.findById(id);

        if (existingEnseignant.isPresent()) {
            Enseignant enseignant = existingEnseignant.get();
            enseignant.setNom(updatedEnseignant.getNom());
            enseignant.setPrenom(updatedEnseignant.getPrenom());
            enseignant.setAge(updatedEnseignant.getAge());
            enseignant.setMatiere(updatedEnseignant.getMatiere());
            enseignant.setAdresse(updatedEnseignant.getAdresse());
            enseignant.setSalaire(updatedEnseignant.getSalaire());

            return enseignantRepository.save(enseignant);
        } else {
            return null; 
        }
    }

    public void deleteEnseignant(Long id) {
        enseignantRepository.deleteById(id);
    }
}
