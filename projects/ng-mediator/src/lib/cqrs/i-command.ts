import { IRequest } from './i-request';

export interface ICommand<TResponse> extends IRequest<TResponse> {
}
