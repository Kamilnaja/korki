import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [UsersComponent],
})
export class UsersModule {}
