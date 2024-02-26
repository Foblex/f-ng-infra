import { ICommand } from "./i-command";
import { Observable } from 'rxjs';
import { IRequestHandler } from './i-request-handler';

export abstract class FCommandBase<TRequest extends ICommand<TResponse>, TResponse>
  implements IRequestHandler<TRequest, TResponse> {

  public handle(request: TRequest): Observable<TResponse> {
    const result = this.execute(request);
    return result;
  }

  protected abstract execute(request: TRequest): Observable<TResponse>;
}
