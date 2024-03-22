import { IDataResponse } from './i-data-response';
import { ITokenModel } from './i-token-model';

export interface ITokenedDataResponse<TData> extends IDataResponse<TData> {

  token?: ITokenModel;
}
