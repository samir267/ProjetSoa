package SoaProject.SoaProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import SoaProject.SoaProject.model.Enseignant;
import SoaProject.SoaProject.model.Etudiant;
import SoaProject.SoaProject.service.EnseignantService;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/enseignants")
public class EnseignantController {

    @Autowired
    private EnseignantService enseignantService;

    @GetMapping("/all")
    public ResponseEntity<List<Enseignant>> getAllEnseignants() {
        List<Enseignant> enseignants = enseignantService.getAllEnseignants();
        return ResponseEntity.ok(enseignants);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Enseignant> getEnseignantById(@PathVariable Long id) {
        Optional<Enseignant> enseignant = enseignantService.getEnseignantById(id);

        if (enseignant.isPresent()) {
            return ResponseEntity.ok(enseignant.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<?> createEnseignant(@RequestBody Enseignant enseignant) {
        try {
            Enseignant createdEtudiant = enseignantService.createEnseignant(enseignant);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdEtudiant);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }
    }

   @PutMapping("/update/{id}")
    public ResponseEntity<Enseignant> updateEnseignant(@PathVariable Long id, @RequestBody Enseignant enseignant) {
        try {
            Enseignant updatedEnseignant = enseignantService.updateEnseignant(id, enseignant);
            return new ResponseEntity<>(updatedEnseignant, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (EntityExistsException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEnseignant(@PathVariable Long id) {
        enseignantService.deleteEnseignant(id);
        return ResponseEntity.noContent().build();
    }
}
