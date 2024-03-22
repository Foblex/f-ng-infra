# ngMediator Library

ngMediator is a mediator library for Angular that facilitates a clean architecture with a better command-query separation. It helps in orchestrating the handling of commands and queries in a simple, extendable, and maintainable manner.

## Installation

Install the ngMediator library via npm:

```bash
npm install @foblex/ng-mediator
```

## Usage

ngMediator simplifies the handling of commands and queries within your Angular applications, ensuring a clean and maintainable architecture. Below are the steps on how to utilize ngMediator in your project:

1. **Define Requests, Validators, and Handlers**:
   Define your requests, validators, and handlers using the provided decorators and interfaces from the ngMediator library.

   Example:
   ```typescript
   import { IRequest, FValidatorBase, FCommandBase, FQueryBase } from '@foblex/ng-mediator';
   
   // Define your Request
   class MyRequest implements IRequest<MyResponse> { }
   
    // Define your Response
   class MyResponse { 
    // fields...
   }

   // Define your Validator
   @Injectable()
   class MyValidator extends FValidatorBase<MyRequest, MyResponse> {
     validate(request: MyRequest): Observable<Error[]> {
       // validation logic...
     }
   }
   
   // Define your Handler
   @Injectable()
   class MyHandler extends FCommandBase<MyRequest, MyResponse> {
     handle(request: MyRequest): Observable<MyResponse> {
       // handling logic...
     }
   }
   // or
   @Injectable()
   class MyHandler extends FQueryBase<MyRequest, MyResponse> {
     handle(request: MyRequest): Observable<MyResponse> {
       // handling logic...
     }
   }
   
   @NgModule({
      imports: [
        FMediatorModule.forFeature(MyRequest, MyValidator, MyHandler),
      ]
   })
   export class Module { }
    ```
2. **Send Requests**:

   Utilize the FMediator service to send your requests. The service will ensure that your requests are validated and handled by the appropriate handlers.

   Example:
    ```typescript
    import { FMediator } from '@foblex/ng-mediator';

    fMediator.send(new MyRequest()).subscribe(response => {
        console.log(response);
    });
    ```


# ngClarc Library

ngClarc is infrastructure library for Angular that provides a robust set of utilities and interfaces designed to simplify and enhance various projects.

## Installation

Install the ngClarc library via npm:

```bash
npm install @foblex/ng-clarc 
```
