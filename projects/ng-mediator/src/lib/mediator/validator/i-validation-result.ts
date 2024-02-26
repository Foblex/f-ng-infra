export interface IValidationResult<TError extends Error> {

  isValid: boolean;

  errors?: TError[];
}
