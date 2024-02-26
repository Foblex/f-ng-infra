import { IValidationResult } from './i-validation-result';

export class ValidationSuccess<TError extends Error>
  implements IValidationResult<TError> {

  public readonly isValid: boolean = true;
}
