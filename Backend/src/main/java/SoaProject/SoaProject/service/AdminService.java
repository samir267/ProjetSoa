package SoaProject.SoaProject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import SoaProject.SoaProject.model.Admin;
import SoaProject.SoaProject.repository.AdminRepo;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    private final AdminRepo adminRepository;

    @Autowired
    public AdminService(AdminRepo adminRepository) {
        this.adminRepository = adminRepository;
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Optional<Admin> getAdminById(Long id) {
        return adminRepository.findById(id);
    }

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(Long id, Admin updatedAdmin) {
        Optional<Admin> existingAdminOptional = adminRepository.findById(id);

        if (existingAdminOptional.isPresent()) {
            Admin existingAdmin = existingAdminOptional.get();
            // Update the fields as needed
            existingAdmin.setNom(updatedAdmin.getNom());
            existingAdmin.setPrenom(updatedAdmin.getPrenom());
            existingAdmin.setEmail(updatedAdmin.getEmail());
            existingAdmin.setTel(updatedAdmin.getTel());
            return adminRepository.save(existingAdmin);
        } else {
            // Handle not found error
            return null;
        }
    }

    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}
