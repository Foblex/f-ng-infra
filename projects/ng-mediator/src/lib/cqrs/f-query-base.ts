import { IQuery } from "./i-query";
import { Observable } from 'rxjs';
import { IRequestHandler } from './i-request-handler';

export abstract class FQueryBase<TRequest extends IQuery<TResponse>, TResponse>
  implements IRequestHandler<TRequest, TResponse> {

  public handle(request: TRequest): Observable<TResponse> {
    const result = this.execute(request);
    return result;
  }

  protected abstract execute(request: TRequest): Observable<TResponse>;
}
