import { IErrorDescription } from './i-error-description';

export interface IErrorResponse {

  referenceId: string;

  errors: IErrorDescription[];
}
