import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { Type } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { FCommandBase, FQueryBase, IRequest, IRequestHandler } from '../cqrs';
import { FValidatorBase } from './validator';
import { FMediator } from './f-mediator';
import { FMediatorModule } from './f-mediator.module';

class MockRequest implements IRequest<string> {
}

// Validators
class SuccessValidator extends FValidatorBase<MockRequest, string> {
  override validate(request: MockRequest): Observable<Error[]> {
    return of([]);
  }
}

class FailureValidator extends FValidatorBase<MockRequest, string> {
  validate(request: MockRequest): Observable<Error[]> {
    return of([ new Error('Validation Error') ]);
  }
}

// Handlers
class SuccessHandler extends FCommandBase<MockRequest, string> {
  execute(request: MockRequest): Observable<string> {
    return of('Success');
  }
}

class FailureHandler extends FQueryBase<MockRequest, string> {
  execute(request: MockRequest): Observable<string> {
    return throwError(() => new Error('Handler Error'));
  }
}


// describe('FMediator', () => {
//   let mediator: FMediator;
//
//   function setupModule(validator: Type<FValidatorBase<MockRequest, string>>, handler: Type<IRequestHandler<MockRequest, string>>) {
//     TestBed.configureTestingModule({
//       imports: [ FMediatorModule.forRoot(), FMediatorModule.forFeature(MockRequest, validator, handler) ]
//     });
//     mediator = TestBed.inject(FMediator);
//   }
//
//   it('should return success when there are no errors', fakeAsync(() => {
//     setupModule(SuccessValidator, SuccessHandler);
//     mediator.send(MockRequest, new MockRequest()).subscribe(response => {
//       expect(response).toEqual('Success');
//     });
//     tick();
//   }));
//
//   it('should return validation error when validator fails', fakeAsync(() => {
//     setupModule(FailureValidator, SuccessHandler);
//     mediator.send(MockRequest, new MockRequest()).pipe(catchError((err, o) => {
//       expect(err).toEqual([ new Error('Validation Error') ]);
//       return o;
//     })).subscribe();
//     tick();
//   }));
// });
