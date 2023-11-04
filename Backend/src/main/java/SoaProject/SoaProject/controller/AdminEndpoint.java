
package SoaProject.SoaProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import SoaProject.SoaProject.model.Admin;
import SoaProject.SoaProject.service.AdminService;

@Endpoint
@Component
public class AdminEndpoint {
    private static final String NAMESPACE_URI = "http://example.com/soap-web-service";

  
    @Autowired
    private AdminService adminService; // Assuming you have an AdminService to manage admin entities

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "CreateAdminRequest")
    @ResponsePayload
    public CreateAdminResponse createAdmin(@RequestPayload CreateAdminRequest request) {
        CreateAdminResponse response = new CreateAdminResponse();
        
        // Process the request and create a new admin entity
        Admin admin = new Admin();
        admin.setNom(request.getNom());
        admin.setPrenom(request.getPrenom());
        admin.setEmail(request.getEmail());
        admin.setTel(request.getTel());

        // Assuming that your AdminService has a method to create an admin
        Admin createdAdmin = adminService.createAdmin(admin);

        // Set the ID of the created admin in the response
        response.setId(createdAdmin.getId());
        response.setNom(createdAdmin.getNom());
        response.setPrenom(createdAdmin.getPrenom());
        response.setEmail(createdAdmin.getEmail());
        response.setTel(createdAdmin.getTel());

        return response;
    }
}