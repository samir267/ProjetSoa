package SoaProject.SoaProject.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Admin",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = {"email"})
        }
)
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;
    @Column(unique = true) // Specify the email field as unique
    private String email;
    private String tel;



}
