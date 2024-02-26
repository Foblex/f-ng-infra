import { CreateUserRequest } from './create-user.request';
import { CreateUserResponse } from './create-user-response';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { FCommandBase } from '@foblex/ng-mediator';

@Injectable()
export class CreateUserHandler extends FCommandBase<CreateUserRequest, CreateUserResponse> {

  constructor() {
    super();
  }

  public execute(request: CreateUserRequest): Observable<CreateUserResponse> {
    return of(new CreateUserResponse('success'));
  }
}
