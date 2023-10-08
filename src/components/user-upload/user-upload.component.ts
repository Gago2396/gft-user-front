import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent {
  userList: any[] = [];

  constructor(private apiService: ApiService) {}

  uploadUsers() {
    this.apiService.uploadUsers(this.userList).subscribe(
      () => {
        console.log('List of users uploaded successfully');
      },
      (error) => {
        console.error('Error uploading users:', error);
      }
    );
  }
}
