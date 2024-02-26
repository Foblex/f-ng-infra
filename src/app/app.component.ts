import { Component, OnInit } from '@angular/core';
import { FMediator } from '@foblex/ng-mediator';
import { CreateUserRequest } from './ng-mediator-demo/domain/create/create-user.request';
import { take } from 'rxjs';
import { CreateUserResponse } from './ng-mediator-demo/domain/create/create-user-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    private fMediator: FMediator
  ) {
  }

  public ngOnInit(): void {
    this.fMediator.send<CreateUserRequest, CreateUserResponse>(
      CreateUserRequest,
      new CreateUserRequest('John Doe', 'johndoe@example.com')
    ).pipe(take(1)).subscribe((response) => {
      alert(response.result);
    });
  }
}
