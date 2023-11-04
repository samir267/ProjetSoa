import { Component } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private adminService: AdminService) {}
  ngOnInit(): void {

   this.createAdmin();
  }
  createAdmin() {
    const adminData = {
      nom: 'John Doe', // Replace with the actual data
      email: 'john.doe@example.com',
      tel: '1234567890'
    };

    this.adminService.createAdmin(adminData).subscribe(
      (response) => {
        // Handle the SOAP response here
        console.log('Admin created:', response);
        // You may want to parse the response XML to extract meaningful data
      },
      (error) => {
        // Handle any errors that may occur during the SOAP request
        console.error('Error creating admin:', error);
      }
    );
  }
}
