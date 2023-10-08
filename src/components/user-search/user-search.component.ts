import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  searchTerm = '';
  searchResults: any[] = [];

  constructor(private apiService: ApiService) {}

  searchUsers() {
    this.apiService.searchUsers(this.searchTerm).subscribe(
      (data: any) => {
        this.searchResults = data;
      },
      (error) => {
        console.error('Error searching users:', error);
      }
    );
  }
}
