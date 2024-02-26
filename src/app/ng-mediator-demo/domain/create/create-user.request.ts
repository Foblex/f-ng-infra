import { CreateUserResponse } from './create-user-response';
import { IRequest } from '@foblex/ng-mediator';

export class CreateUserRequest implements IRequest<CreateUserResponse> {
  constructor(
    public name: string,
    public emailAddress: string
  ) {
  }
}
