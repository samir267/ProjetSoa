package SoaProject.SoaProject.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Etudiant",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = {"email"})
        }
)
@NoArgsConstructor
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
    private Boolean absent;
    @Column(unique = true) // Specify the email field as unique
    private String email;
    private String tel;



}
