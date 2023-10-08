import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserSearchComponent } from '../components/user-search/user-search.component';
import { UserFavoritesComponent } from '../components/user-favorites/user-favorites.component';
import { UserUploadComponent } from '../components/user-upload/user-upload.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'search', component: UserSearchComponent },
  { path: 'favorites', component: UserFavoritesComponent },
  { path: 'upload', component: UserUploadComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
