import { IRequest } from "./i-request";
import { Observable } from 'rxjs';

export interface IRequestHandler<TRequest extends IRequest<TResponse>, TResponse> {

  handle(request: TRequest): Observable<TResponse>;
}
