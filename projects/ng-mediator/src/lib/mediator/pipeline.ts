import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { FValidatorBase } from './validator';
import { IRequest, IRequestHandler } from '../cqrs';

export class Pipeline<TRequest extends IRequest<TResponse>, TResponse> {

  constructor(
    public requestType: string,
    private validator: FValidatorBase<TRequest, TResponse>,
    private requestHandler: IRequestHandler<TRequest, TResponse>
  ) {
  }

  public execute(request: TRequest): Observable<TResponse> {
    return this.validator.handle(request).pipe(
      switchMap((result) => {
        if (!result.isValid) {
          return throwError(() => result.errors);
        }
        return this.requestHandler.handle(request).pipe(catchError((error) => throwError(() => [error])));
      })
    );
  }
}
