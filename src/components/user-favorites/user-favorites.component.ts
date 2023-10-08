import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css']
})
export class UserFavoritesComponent {
  user_id: number = 0;
  product_id: number = 0;

  constructor(private apiService: ApiService) {}

  addFavorite() {
    const favoriteData = { user_id: this.user_id, product_id: this.product_id };

    this.apiService.addFavorite(favoriteData).subscribe(
      () => {
        console.log('Favorite added successfully');
      },
      (error) => {
        console.error('Error adding favorite:', error);
      }
    );
  }

  deleteFavorite() {
    this.apiService.deleteFavorite(this.user_id, this.product_id).subscribe(
      () => {
        console.log('Favorite deleted successfully');
      },
      (error) => {
        console.error('Error deleting favorite:', error);
      }
    );
  }
}
