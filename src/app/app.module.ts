import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { FMediatorModule } from '@foblex/ng-mediator';
import { CreateUserRequest } from './ng-mediator-demo/domain/create/create-user.request';
import { CreateUserHandler } from './ng-mediator-demo/domain/create/create-user.handler';
import { CreateUserValidator } from './ng-mediator-demo/domain/create/create-user.validator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterOutlet,
    FMediatorModule.forFeature(CreateUserRequest, CreateUserValidator, CreateUserHandler)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
