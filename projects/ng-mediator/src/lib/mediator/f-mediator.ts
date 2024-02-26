import { Injectable, Inject, InjectionToken, Type } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Pipeline } from './pipeline';
import { IRequest } from '../cqrs';

export const F_FEATURE_TOKEN = new InjectionToken('F_FEATURE_TOKEN');

@Injectable({
  providedIn: 'root',
})
export class FMediator {

  private features = new Map<string, Pipeline<any, any>>();

  constructor(@Inject(F_FEATURE_TOKEN) featureProviders: Pipeline<any, any>[]) {
    for (const feature of featureProviders) {
      this.features.set(feature.requestType, feature);
    }
  }

  public send<TRequest extends IRequest<TResponse>, TResponse>(requestType: Type<TRequest>, request: TRequest): Observable<TResponse> {
    const feature = this.features.get(requestType.name);
    if (!feature) {
      return throwError(() => Error('Pipeline not registered for request type.'));
    }
    return feature.execute(request);
  }
}
