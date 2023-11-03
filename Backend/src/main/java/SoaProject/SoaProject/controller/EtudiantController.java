package SoaProject.SoaProject.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import SoaProject.SoaProject.model.Etudiant;
import SoaProject.SoaProject.service.EtudiantService;

@RestController
@RequestMapping("/etudiants")
public class EtudiantController {


    private final EtudiantService etudiantService;
    @Autowired
    public EtudiantController(EtudiantService etudiantService) {
        this.etudiantService = etudiantService;
    }

    @PostMapping("/create")

    public ResponseEntity<?> createEtudiant(@RequestBody Etudiant etudiant) {
        try {
            Etudiant createdEtudiant = etudiantService.createEtudiant(etudiant);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdEtudiant);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }
    }
    


    @GetMapping("/getAll")
    public List<Etudiant> getAllEtudiants() {
    return etudiantService.getAllEtudiants();
}


    @GetMapping("/getById/{id}")
    public ResponseEntity<Etudiant> getEtudiantById(@PathVariable Long id) {
    Optional<Etudiant> etudiant = etudiantService.getEtudiantById(id);
    if (etudiant.isPresent()) {
        return ResponseEntity.ok(etudiant.get());
    } else {
        return ResponseEntity.notFound().build();
    }
}


    @PutMapping("/update/{id}")
    public ResponseEntity<Etudiant> updateEtudiant(@PathVariable Long id, @RequestBody Etudiant etudiant) {
    try {
        Etudiant updatedEtudiant = etudiantService.updateEtudiant(id, etudiant);
        return ResponseEntity.ok(updatedEtudiant);
    } catch (EntityNotFoundException e) {
        return ResponseEntity.notFound().build();
    }
}
    


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEtudiant(@PathVariable Long id) {
    try {
        etudiantService.deleteEtudiant(id);
        return ResponseEntity.noContent().build();
    } catch (EntityNotFoundException e) {
        return ResponseEntity.notFound().build();
    }
}
@PatchMapping("/presence/{id}")
public ResponseEntity<Etudiant> toggleAbsentStatus(@PathVariable Long id) {
    Etudiant updatedEtudiant = etudiantService.toggleAbsentStatus(id);
    return ResponseEntity.ok(updatedEtudiant);
}

}