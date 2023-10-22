package SoaProject.SoaProject.model;


import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name="Etudiant")

@AllArgsConstructor
@Getter
@Setter



public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
    private String nom;
    private String prenom;
    private Long age;
    private String classe;
    private String adresse;

    public Etudiant() {
    }

    
}