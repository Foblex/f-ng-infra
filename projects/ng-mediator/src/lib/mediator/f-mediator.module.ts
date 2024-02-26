import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { F_FEATURE_TOKEN, FMediator } from './f-mediator';
import { Pipeline } from './pipeline';
import { IRequest, IRequestHandler } from '../cqrs';
import { FValidatorBase } from './validator';

@NgModule()
export class FMediatorModule {

  public static forRoot(): ModuleWithProviders<FMediatorModule> {
    return {
      ngModule: FMediatorModule,
      providers: [ FMediator ]
    };
  }

  public static forFeature<TRequest extends IRequest<TResponse>, TResponse>(
    requestType: Type<TRequest>,
    validatorType: Type<FValidatorBase<TRequest, TResponse>>,
    handlerType: Type<IRequestHandler<TRequest, TResponse>>
  ): ModuleWithProviders<FMediatorModule> {
    return {
      ngModule: FMediatorModule,
      providers: [
        validatorType,
        handlerType,
        {
          provide: F_FEATURE_TOKEN,
          useFactory: (validator: FValidatorBase<TRequest, TResponse>, handler: IRequestHandler<TRequest, TResponse>) => {
            return new Pipeline(requestType.name, validator, handler);
          },
          deps: [ validatorType, handlerType ],
          multi: true
        }
      ]
    };
  }
}
