package SoaProject.SoaProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import SoaProject.SoaProject.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Long> {
}

