import { IRequest } from '../../cqrs';
import { Observable, of, switchMap } from 'rxjs';
import { IValidationResult } from './i-validation-result';
import { ValidationFailed } from './validation-failed';
import { ValidationSuccess } from './validation-success';

export abstract class FValidatorBase<TRequest extends IRequest<TResponse>, TResponse, TError extends Error = Error> {

  public handle(request: TRequest): Observable<IValidationResult<TError>> {
    return this.validate(request).pipe(
      switchMap((errors) => {
        if (errors && errors.length > 0) {
          return of(new ValidationFailed(errors))
        }
        return of(new ValidationSuccess());
      })
    );
  }

  protected abstract validate(request: TRequest): Observable<TError[]>;
}
