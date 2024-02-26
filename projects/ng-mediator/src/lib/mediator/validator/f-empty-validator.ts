import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IRequest } from '../../cqrs';
import { FValidatorBase } from './f-validator-base';

@Injectable({
  providedIn: 'root',
})
export class FEmptyValidator<TRequest extends IRequest<TResponse>, TResponse>
  extends FValidatorBase<TRequest, TResponse>{

  public override validate(request: TRequest): Observable<Error[]> {
    return of([]);
  }
}
