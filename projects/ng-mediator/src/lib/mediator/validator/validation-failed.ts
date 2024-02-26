import { IValidationResult } from './i-validation-result';

export class ValidationFailed<TError extends Error>
  implements IValidationResult<TError> {

  public readonly isValid: boolean = false;

  constructor(
    public readonly errors: TError[]
  ) {
  }
}
