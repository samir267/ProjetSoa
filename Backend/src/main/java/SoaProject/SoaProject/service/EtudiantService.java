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


    public Etudiant createEtudiant(Etudiant etudiant) throws Exception {
        Etudiant existingEtudiant = etudiantRepository.findByEmail(etudiant.getEmail());
    
        if (existingEtudiant != null) {
            throw new Exception("Email already exists.");
        }
    
        return etudiantRepository.save(etudiant);
    }
    
    


    
    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }


    public Optional<Etudiant> getEtudiantById(Long id) {
        return etudiantRepository.findById(id);
    }




    public Etudiant updateEtudiant(Long id, Etudiant etudiant) {
        if (etudiantRepository.existsById(id)) {
            etudiant.setId(id);
            return etudiantRepository.save(etudiant);
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
}