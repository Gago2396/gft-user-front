import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';  // Asegúrate de tener un servicio para interactuar con la API

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
