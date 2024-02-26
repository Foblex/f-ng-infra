import { CreateUserRequest } from './create-user.request';
import { Observable, of } from 'rxjs';
import { CreateUserResponse } from './create-user-response';
import { Injectable } from '@angular/core';
import { FValidatorBase } from '@foblex/ng-mediator';

@Injectable()
export class CreateUserValidator extends FValidatorBase<CreateUserRequest, CreateUserResponse> {

  constructor() {
    super();
  }

  public validate(request: CreateUserRequest): Observable<Error[]> {
    const errors: Error[] = [];

    if(!request.name) {
      errors.push(new Error('name is required'));
    }

    if(!request.emailAddress) {
      errors.push(new Error('emailAddress is required'));
    }

    return of(errors);
  }
}
